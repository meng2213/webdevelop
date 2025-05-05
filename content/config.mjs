
/**
 * @type {import("../config/siteConfig").UserConfig}
 */
const config = {
  showHero: true, // 是否显示英雄部分
  title: "一个简单的网页", // 网站标题，将显示在页面顶部
  description: "这是一个简单的网页，用于测试开发。", // 网站描述，有助于SEO
  author: "M", // 网站底部显示的作者名
  authorLogo: "/logo.png", // 确保logo图片路径正确
  hero: {
    title: "Welcome to my site!", // 英雄部分的标题
    description: "A collection of interesting thoughts and ideas", // 英雄部分的描述
    image: "/assets/hero.jpg", // 英雄部分的图片路径
    cta: [
      { href: "/about", label: "About" }, // 调用操作按钮1
      { href: "/docs", label: "Docs" }   // 调用操作按钮2
    ]
  },
  domain: "https://john.app/", // 网站域名
  navLinks: [{ href: "/about", name: "不要点进来" }], // 导航链接
  showSidebar: true // 是否显示侧边栏
};

export default config;
