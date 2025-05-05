
/**
 * @type {import("../config/siteConfig").UserConfig}
 */
const config = {
  // title will be displayed on the top of your site
  title: "一个简单的网页",
  // adding a description helps with SEO
  description: "这是一个简单的网页，用于测试开发。",
  // author of site displayed on the bottom of your site
  author: "M",
   // logo image
  authorLogo: "/logo.png", // 确保路径正确
  domain: "https://john.app/",
  // links to the pages you want to link to in the navbar
  navLinks: [{ href: "/about", name: "不要点进来" }],
  // 添加 showSidebar 配置
  showSidebar: true,
};

export default config;
