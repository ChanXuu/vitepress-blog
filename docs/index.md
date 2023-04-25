---
layout: home

hero:
  name: Hi I'm  Chen Xu
  text: Welcome to my Blog
  # tagline: 副内容信息
  image:
    src: /assets/1.jpg
    alt: 网站的 logo 图片
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/what-is-vitepress
    - theme: alt
      text: 在 github 上查看
      link: https://github.com/vuejs/vitepress
features:
  - icon: 🧑‍💻
    title: 岗位
    details: 前端开发
  - icon: 💻
    title: 技术栈
    details: <img src="https://img.shields.io/badge/-Vue-34495e?logo=vue.js"><img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white">
  - icon: 🛠️
    title: 技能
    details: <img src="https://img.shields.io/badge/-HTML5-red?logo=html5&logoColor=white"><img src="https://img.shields.io/badge/-CSS3-blue?logo=css3&logoColor=white"><img src="https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/-Vue-34495e?logo=vue.js"><img src="https://img.shields.io/badge/-Vite-646cff?logo=vite&logoColor=white"><img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/-微信小程序-07c160?logo=wechat&logoColor=white"><img src="https://img.shields.io/badge/-Echarts-red?logo=apacheecharts&logoColor=white">
    
---

<script setup>
// import home from './.vitepress/components/home.vue'
const html = 
  `<div>
    <img src="https://img.shields.io/badge/-Vue-34495e?logo=vue.js">
    <img src="https://img.shields.io/badge/-Vue-34495e?logo=vue.js">
  </div>`
  expose({html})
</script>
