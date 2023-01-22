const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  defaultShowCopyCode: false,
  unstable_staticImage: true,
});

module.exports = withNextra();
