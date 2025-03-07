import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  // 基础路径
  base: "/",
  //头部引入，这里引入的是51la统计
  head: [["script", { type: "text/javascript", src: "/assets/js/51la.js" }]],
  // 网站信息
  locales: {
    "/": {
      lang: "zh-CN",
      title: "小孙同学Coding",
      description: "热爱可抵漫长岁月！",
    },
  },
  // 主题配置
  theme,
  // 插件配置
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
