// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.mohamadfarhan.space",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://example.com/", hreflang: "x-default" },
    { href: "https://example.com/en", hreflang: "en" },
    { href: "https://example.com/id", hreflang: "id" },
  ],
};
