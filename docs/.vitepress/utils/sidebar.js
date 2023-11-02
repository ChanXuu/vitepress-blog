export const sidebar = {
    "/front/vue/": [
        {
            text: "Vue",
            items: [{ text: "vue3", link: "/front/vue/Vue3" }],
            collapsible: true,
            collapsed: true
        },
        {
            text: "Pinia",
            items: [],
            collapsible: true,
            collapsed: true
        }
    ],
    "/front/wechat/": [
        {
            text: "微信小程序",
            link: "/front/wechat/微信小程序"
        },
        {
            text: "企业微信自建应用",
            link: "/front/wechat/企微自建应用"
        }
    ],
    "/server/": [
        {
            text: "NestJs",
            items: [{ text: "nestjs基础", link: "/server/nestjs/index" }],
            collapsible: true,
            collapsed: true
        },
        {
            text: "Nginx",
            items: [{ text: "Nginx", link: "/server/nginx/index" }],
            collapsible: true,
            collapsed: true
        },
        {
            text: "Docker",
            items: [{ text: "docker", link: "/server/docker/index" }],
            collapsible: true,
            collapsed: true
        },
        {
            text: "数据库",
            items: [{ text: "MySql", link: "/server/dataBase/index" }],
            collapsible: true,
            collapsed: true
        }
    ],
    "/knacks/": [
        {
            text: "CSS",
            items: [],
            collapsible: true,
            collapsed: true
        },
        {
            text: "JavaScript",
            items: [],
            collapsible: true,
            collapsed: true
        },
        {
            text: "Git",
            items: [],
            collapsible: true,
            collapsed: true
        },
        {
            text: "接口请求",
            items: [{ text: "axios封装", link: "/knacks/request/axios封装" }],
            collapsible: true,
            collapsed: true
        },
        {
            text: "配置文件",
            items: [
                { text: "prettierrc配置", link: "/knacks/configFiles/prettierrc配置" },
                { text: "eslintrc配置", link: "/knacks/configFiles/eslintrc配置" }
            ],
            collapsible: true,
            collapsed: true
        },
        {
            text: "vscode",
            items: [
                { text: "常用插件", link: "/knacks/vscode/常用插件" },
                { text: "自用配置", link: "/knacks/vscode/自用配置" },
            ],
            collapsible: true,
            collapsed: true
        },
    ]
}
