const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  defaultShowCopyCode: false,
});

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh', 'de'],
    defaultLocale: 'en'
  }
})
