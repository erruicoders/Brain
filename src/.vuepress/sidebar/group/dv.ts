import { arraySidebar } from "vuepress-theme-hope";

export const dv = arraySidebar([
  {
    text: "Foreword",
    icon: "hi",
    prefix: "foreword/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "Basic",
    icon: "jichu",
    prefix: "basic/",
    children: [
      {
        text: "前言",
        icon: "zhinanzhen",
        prefix: "foreword/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "图形基础",
        icon: "web",
        prefix: "graphics_basics/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "数学基础",
        icon: "shuxue",
        prefix: "math_basics/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "视觉基础",
        icon: "tuxing",
        prefix: "visual_basics/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "视觉高级",
        icon: "sanwei",
        prefix: "visual_advanced/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "性能优化",
        icon: "xingneng",
        prefix: "performance/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "数据处理",
        icon: "shuju",
        prefix: "data/",
        children: "structure",
        collapsible: true,
      },
    ],
    // children: "structure",
    collapsible: true,
  },
  {
    text: "Three",
    icon: "three",
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
    icon: "cesium",
    prefix: "cesium/",
    children: [
      {
        text: "概述",
        icon: "zhinanzhen",
        prefix: "guide/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "快速上手",
        icon: "kuaisu",
        prefix: "quick-start/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "数据加载",
        icon: "discover",
        prefix: "02/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "事件处理",
        icon: "discover",
        prefix: "03/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "图形绘制",
        icon: "discover",
        prefix: "04/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "三维模型",
        icon: "discover",
        prefix: "05/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "材质特效",
        icon: "discover",
        prefix: "06/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "工具应用",
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
    // children: "structure",
    collapsible: true,
  },
  {
    text: "AntV",
    icon: "antv",
    prefix: "antv/",
    children: [
      {
        text: "Guide",
        icon: "zhinanzhen",
        prefix: "guide/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "G2Plot",
        icon: "graph",
        prefix: "g2plot/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "L7Plot",
        icon: "earth",
        prefix: "l7lot/",
        children: "structure",
        collapsible: true,
      },
    ],
    // children: "structure",
    collapsible: true,
  },
  {
    text: "VisActor",
    icon: "visactor",
    prefix: "visactor/",
    // children: "structure",
    children: [
      {
        text: "Guide",
        icon: "zhinanzhen",
        prefix: "guide/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VChart",
        icon: "tuxing",
        prefix: "vchart/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VTable",
        icon: "table",
        prefix: "vtable/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VGrammar",
        icon: "grammar",
        prefix: "vgrammar/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VRender",
        icon: "render",
        prefix: "vrender/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VGraph",
        icon: "graph",
        prefix: "vgraph/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VGIS",
        icon: "earth",
        prefix: "vgis/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
]);
