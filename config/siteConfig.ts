// siteConfig.ts
import userConfig from "@/content/config.mjs";
import {
  AnalyticsConfig,
  AuthorConfig,
  CommentsConfig,
  NavConfig,
  ThemeConfig,
  defaultConfig,
} from "@portaljs/core";
import { DefaultSeoProps } from "next-seo";

export type UserConfig = {
  analyticsConfig?: AnalyticsConfig;
  comments?: CommentsConfig;
  defaultAuthor: string;
  editLinkRoot?: string;
  logo?: AuthorConfig["logo"];
  navbarTitle?: {
    text?: NavConfig["title"];
    logo?: NavConfig["logo"];
  };
  nextSeo?: Partial<DefaultSeoProps>;
  showComments?: boolean;
  search?: NavConfig["search"];
  social?: NavConfig["social"];
  theme?: ThemeConfig;
  preProcess?: (source: string) => string;
  title?: string;
  author: string;
  domain: string;
  hero?: { // 添加 hero 属性
    title: string;
    description: string;
    image: string;
    cta: Array<{ href: string; label: string }>;
  };
} & Partial<typeof defaultConfig>;

export type SiteConfig = typeof defaultConfig & typeof userConfig;

const siteConfig: SiteConfig = {
  ...defaultConfig,
  ...userConfig,
  // 防止 theme 对象被覆盖
  theme: {
    ...defaultConfig.theme,
    ...userConfig?.theme,
  },
};

export default siteConfig;
