import { defineConfig } from "vitepress";
import { nav } from "./utils/nav";
import { sidebar } from "./utils/sidebar";

export default defineConfig({
  title: "ChanXuu",
  markdown: {
    lineNumbers: true, //显示代码行数
  },
  lastUpdated: true, //以git提交的时间为更新时间
  cleanUrls: "without-subfolders",
  author: "ChenXu", //作者
  themeConfig: {
    nav,
    socialLinks: [{ icon: "github", link: "https://github.com/ChanXuu" }],
    sidebar,
    lastUpdatedText: "最后更新",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outlineTitle: "这一页",
  },
});
