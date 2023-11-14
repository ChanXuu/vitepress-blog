# Fetch用法

## 什么是fetch

Fetch 是浏览器提供的原生 AJAX 接口。

由于原来的XMLHttpRequest不符合关注分离原则，且基于事件的模型在处理异步上已经没有现代的Promise等那么有优势。因此Fetch出现来解决这种问题。

Fetch API 提供了能够用于操作一部分 HTTP 的 JavaScript 接口，比如 requests 和 responses。它同时也提供了一个全局的 fetch() 方法——能够简单的异步的获取资源。



## 用法

Fetch API 中的GlobalFetch 接口包含了GlobalFetch.fetch() 方法，它被用于发送请求获取资源。这个方法返回一个promise，这个promise会在请求响应后被resolve，并传回Response对象。
当遇到网络错误时，fetch返回的promise会被reject，并传回TypeError。

`fetch（url,options）`: 其中url是请求地址（必须），options是配置参数（可选）

```js
async fetchReq() {
		const response = await fetch('https://mockapi.eolink.com/tag/sensors/list',{
				method: 'POST',	
    })
    console.log(response)
		const list = await response.json()
		console.log(list.data)
	}
```

fetch返回了一个`Response` ，它是一个`promise`，这个`Response`内部包含了请求的`body`和`Headers`的信息，所以得用内置的`json`方法

开帮我们处理好我们需要的内容，`response.json()`后返回的也是一个`promise`它的内容就是我们请求的内容



## options的配置

```js
{
        method: "POST", // *GET, POST, PUT, DELETE, 等.
        //此项为请求方法相关配置
        mode: "cors", // no-cors（跨域模式但服务器端不支持cors）, cors（跨域模式，    
        需要服务器通过Access-Control-Allow-Origin来允许指定的源进行跨域）,   
        *same-origin（同源）
        //此项为跨域相关配置
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //此项为缓存相关配置
        credentials: "same-origin", // include（携带cookie）,   
        *same-origin（cookie同源携带）, omit（不携带）
        //此项为cookie相关配置
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow（自动重定向）, error    
        //此项为重定向相关配置
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // 此处需要和headers里的 "Content-Type" 相对应，   
        1. POST或者PUT方法需要此配置并且"Content-Type": "application/json"   
        2. 表单类的提交需要配置body: formData
            var formData = new FormData();
            var fileField = document.querySelector("input[type='file']");
            formData.append('username', 'abc123');
            formData.append('avatar', fileField.files[0]);
            fetch('https://example.com/profile/avatar', {
              method: 'PUT',
              body: formData
            })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
    }
```

