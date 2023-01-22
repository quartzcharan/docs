import React from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";
/*change starts*/
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
            });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
/*change ends*/

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

        <link rel="mask-icon" href="https://assets-charanquartz.netlify.app/a/w/docs.assets/cq.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={`https://docs.charanquartz.vercel.app${asPath}`} />
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
  docsRepositoryBase: "https://github.com/charanquartz/docs/edit/main",
  footer: {
    text: "Learning Documentation of Charan Quartz",
  },
  i18n: [],
  
};

export default config;
