> **axios 的 ts 封装**
>
> - 有 `get`,`post`,`put`,`delete` 四种请求
> - 支持单个取消单个请求或取消全部请求

```typescript
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

class Request {
    // Axios 实例
    instance: AxiosInstance
    // 存放取消请求控制器
    abortControllerMap: Map<string, AbortController>
    constructor(config: AxiosRequestConfig = {}) {
        // 创建 Axios 实例
        this.instance = axios.create(config)
        // 存储取消请求的控制器
        this.abortControllerMap = new Map()

        // 请求拦截器
        this.instance.interceptors.request.use(
            (res: InternalAxiosRequestConfig) => {
                const controller = new AbortController()
                // 获取请求的 url
                const url = res.url || ''
                // 获取请求的类型
                const method = res.method || ''
                console.log(`${method}:${url}`)
                // 将控制器存储到 Map 中
                res.signal = controller.signal
                this.abortControllerMap.set(`${method}:${url}`, controller)
                return res
            },
            (err: any) => err
        )
        // 响应拦截器
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                // 获取响应的 url
                const url = res.config.url || ''
                // 获取响应的类型
                const method = res.config.method || ''
                // 从 Map 中删除对应的控制器
                console.log(`${method}:${url}`)
                this.abortControllerMap.delete(`${method}:${url}`)
                // 返回数据
                return res.data
            },
            (err: any) => err // 响应拦截器错误处理函数
        )
    }

    // 取消全部请求
    cancelAllRequest() {
        for (const controller of this.abortControllerMap.values()) {
            controller.abort()
        }
        // 清空 Map
        this.abortControllerMap.clear()
    }

    // 取消指定的请求
    cancelRequest(url: string | string[]) {
        // 将参数转换为数组
        const urlList = Array.isArray(url) ? url : [url]
        urlList.forEach(_url => {
            // 根据 url 获取对应的控制器并取消请求
            this.abortControllerMap.get(_url)?.abort()
            // 从 Map 中删除对应的控制器
            this.abortControllerMap.delete(_url)
        })
    }

    // 发送请求的方法，返回 Promise 对象
    request<T>(config: AxiosRequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then((res: any) => {
                    const { response } = res
                    if (!response) {
                        resolve(res as T)
                    } else {
                        // 请求失败的操作,根据需求操作
                        // ...
                        const { data } = response
                        console.log(res)
                        console.log(`请求失败,errCode:${data.code},原因:${data.msg}`)
                    }
                })
                .catch((err: any) => {
                    reject(err)
                })
        })
    }

    // 发送 GET 请求的方法，返回 Promise 对象
    async get<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const timeStamp = Date.now()
        return this.request<T>({ ...config, method: 'get', url, params: { ...data, timeStamp } })
    }
    // 发送 POST 请求的方法，返回 Promise 对象
    async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'post', url, data })
    }
    // 发送 PUT 请求的方法，返回 Promise 对象
    async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'put', url, data })
    }
    // 发送 DELETE 请求的方法，返回 Promise 对象
    async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'delete', url })
    }
}

// 实例化axios
const request = new Request({
    timeout: 6000,
    baseURL: 'http://127.0.0.0',
})

export default request

```
