import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/web/": [
    {
      icon: "guide",
      text: "Foreword",
      prefix: "foreword/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "HTML",
      icon: "html",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "CSS",
      icon: "css",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "JavaScript",
      icon: "javascript",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "ES6",
      icon: "es6",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Vue",
      icon: "vue",
      prefix: "vue/",
      // children: "structure",
      children: [
        {
          text: "Hello",
          icon: "discover",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Learn",
          icon: "hot",
          prefix: "learn/",
          children: [
            {
              text: "基础",
              icon: "discover",
              prefix: "essential/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "深入组件",
              icon: "discover",
              prefix: "components/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "逻辑复用",
              icon: "discover",
              prefix: "reusability/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "内置组件",
              icon: "discover",
              prefix: "built-ins/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "应用规范化",
              icon: "discover",
              prefix: "scaling-up/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "最佳实践",
              icon: "discover",
              prefix: "best-practices/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "TypeScript",
              icon: "discover",
              prefix: "typescript/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "进阶主题",
              icon: "discover",
              prefix: "extras/",
              children: "structure",
              collapsible: true,
            },
          ],
          collapsible: true,
        },
        {
          text: "Use",
          icon: "operate",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Know",
          icon: "ask",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Love",
          icon: "like",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
      ],
      collapsible: true,
    },
    // {
    //   text: "React",
    //   icon: "react",
    //   prefix: "html/",
    //   children: "structure",
    //   collapsible: true,
    // },
    // {
    //   text: "Angular",
    //   icon: "angular",
    //   prefix: "html/",
    //   children: "structure",
    //   collapsible: true,
    // },
    {
      text: "Node",
      icon: "nodeJS",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Nuxt",
      icon: "customize",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    // {
    //   text: "Next",
    //   icon: "software",
    //   prefix: "html/",
    //   children: "structure",
    //   collapsible: true,
    // },
    {
      text: "Electron",
      icon: "window",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Dev-Tools",
      icon: "operate",
      prefix: "html/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Data-Visualization",
      icon: "eye",
      prefix: "data-visualization/",
      children: [
        {
          text: "Basic",
          icon: "discover",
          prefix: "basic/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "Three",
          icon: "operate",
          prefix: "three/",
          children: [
            {
              text: "前言",
              icon: "discover",
              prefix: "00/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "概述",
              icon: "discover",
              prefix: "01/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "照相机",
              icon: "discover",
              prefix: "reusability/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "几何形状",
              icon: "discover",
              prefix: "02/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "材质",
              icon: "discover",
              prefix: "03/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "网格",
              icon: "discover",
              prefix: "04/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "动画",
              icon: "discover",
              prefix: "05/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "外部模型",
              icon: "discover",
              prefix: "06/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "光与影",
              icon: "discover",
              prefix: "07/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "着色器",
              icon: "discover",
              prefix: "08/",
              children: "structure",
              collapsible: true,
            },
          ],
          collapsible: true,
        },
        {
          text: "Cesium",
          icon: "ask",
          prefix: "hello/",
          children: "structure",
          collapsible: true,
        },
        // {
        //   text: "高德地图",
        //   icon: "like",
        //   prefix: "hello/",
        //   children: "structure",
        //   collapsible: true,
        // },
        // {
        //   text: "Three",
        //   icon: "hot",
        //   prefix: "learn/",
        //   children: [
        //     {
        //       text: "基础",
        //       icon: "discover",
        //       prefix: "essential/",
        //       children: "structure",
        //       collapsible: true,
        //     },
        //     {
        //       text: "深入组件",
        //       icon: "discover",
        //       prefix: "components/",
        //       children: "structure",
        //       collapsible: true,
        //     },
        //     {
        //       text: "逻辑复用",
        //       icon: "discover",
        //       prefix: "reusability/",
        //       children: "structure",
        //       collapsible: true,
        //     },
        //     {
        //       text: "内置组件",
        //       icon: "discover",
        //       prefix: "built-ins/",
        //       children: "structure",
        //       collapsible: true,
        //     },
        //     {
        //       text: "应用规范化",
        //       icon: "discover",
        //       prefix: "scaling-up/",
        //       children: "structure",
        //       collapsible: true,
        //     },
        //     {
        //       text: "最佳实践",
        //       icon: "discover",
        //       prefix: "best-practices/",
        //       children: "structure",
        //       collapsible: true,
        //     },
        //     {
        //       text: "TypeScript",
        //       icon: "discover",
        //       prefix: "typescript/",
        //       children: "structure",
        //       collapsible: true,
        //     },
        //     {
        //       text: "进阶主题",
        //       icon: "discover",
        //       prefix: "extras/",
        //       children: "structure",
        //       collapsible: true,
        //     },
        //   ],
        //   collapsible: true,
        // },
      ],
      collapsible: true,
    },
  ],
  "/cs/": [
    {
      icon: "discover",
      text: "前言",
      prefix: "web/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/ai/": [
    {
      icon: "discover",
      text: "前言",
      prefix: "web/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/en/": [
    {
      icon: "discover",
      text: "前言",
      prefix: "web/",
      children: "structure",
      collapsible: true,
    },
  ],
  "/life/": [
    {
      icon: "discover",
      text: "程序人生",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "discover",
      text: "生存指南",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "discover",
      text: "延寿指南",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "discover",
      text: "恋爱指南",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "discover",
      text: "做饭指南",
      prefix: "coder/",
      children: "structure",
      collapsible: true,
    },
  ],
});
