# Docker 使用

## 镜像相关命令

- 搜索镜像
    ```
    docker search 镜像名
    ```



- 下载镜像
    ```
    docker pull 镜像名:版本号（ 不输入版本号默认latest版本 ）
    ```



- 列出镜像
    ```
    docker images
    ```



- 删除本地镜像
    ```
    docker rmi 镜像名 （ 如果要强制删除则在镜像名前加上 -f ）
    ```

## 容器相关命令

- 新建并启动容器

    使用以下 `docker run` 命令即可新建并启动一个容器，该命令是最常用的命令，它有很多选项，以下是一些常用选项

    ```
    -d 表示后台运行
    -P 随机端口映射
    -p 指定端口映射，有以下四种格式：
    	-- ip:host:containerPort
    	-- ip:containerPort
    	-- hostPort:containerPort
    	-- containerPort
    --net 指定网络模式，该选项有以下可选参数：
    	--net=bridge 默认选项，表示连接到默认网桥
    	--net=host 容器使用宿主机的网络
    	--net=container:NAME-or-ID 告诉Docker让新建容器使用已有容器的网络
    	--net=none 不配置该容器的网络，用户可以自定义网络配置
    	
    eg：docker run -d -p 91:80 nginx
    
    这样就能启动一个nginx的容器
    -d 表示后台运行
    -p 宿主机端口:容器端口  // 开放容器端口到宿主机端口
    这样访问宿主机ip的80端口就可以访问到nginx主界面
    ```
    
    

- 列出容器
    `docker ps `  显示当前正在运行的容器

    `docker ps -a`  显示所有状态的容器,容器的状态共有 7 种：`created|restarting|running|removing|paused|exited|dead`

    `docker ps -n 3`  显示最后被创建的 n 个容器

    

- 停止容器

    ```
    docker stop 容器id
    ```

    

- 强制停止容器
    ```
    docker kill 容器id
    ```



- 启动已停止的容器

    ```
    docker start 容器id
    ```



- 重启容器

    ```
    docker restart 容器id
    ```



- 删除容器

    ```
    docker rm 容器id  （ 如果要强制删除则在容器id前加上 -f ）
    ```



- 查看日志
    ```
    docker logs 容器id
    ```



- 查看容器详情
    ```
    docker inspect 容器id
    ```

    

- 查看容器日志
    ``` 
    docker container logs 容器id
    ```

    

- 查看容器里的进程
    ```
    docker top 容器id
    ```



- 容器与宿主机互相复制文件

    - 从容器里面拷文件到宿主机

        ```
        docker cp 容器id:要拷贝的文件在容器里面的路径 宿主机的相应路径
        eg: docker cp 7aa:/etc/nginx/nginx.conf /my/nginx
        ```

    - 从宿主机拷文件到容器里面

        ```
        docker cp 要拷贝的宿主机文件路径 容器id:要拷贝到容器里面对应的路径
        ```

    

- 进入容器

    使用`docker exec`命令用于进入正在运行的docker容器，如果`docker run`命令容器的时候，没有使用`-it`参数，就要用这个命令进入容器，一旦进入了容器，就可以在容器的`Shell`执行命令了

    ```
    docker exec -it 容器id /bin/bash （有的容器需要把/bin/bash改为sh）
    ```

    
