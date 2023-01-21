import React from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Learning Documentation of Charan Quartz",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name="robots" content="follow, index" />
        <link href="/images/c16.ico" rel="shortcut icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/c180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/c32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/c16.png"
        />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={`https://docs.nakafa.com${asPath}`} />
        <meta
          property="og:title"
          content={frontMatter.title || "Learning Documentation of Charan Quartz"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "Learning Documentation of Charan Quartz"}
        />
      </>
    );
  },
  project: {
    link: "https://github.com/charanquartz",
  },
  chat: {
    link: "https://go.cquartz.live/discord",
  },
  docsRepositoryBase: "https://github.com/charanquartz/docs.demo/edit/main",
  footer: {
    text: "Learning Documentation of Charan Quartz",
  },
  i18n: [],
};

export default {
  banner: {
    key: '2.0-release',
    text: <a href="https://nextra.site" target="_blank">
      🎉 Nextra 2.0 is released. Read more →
    </a>,
  },
};