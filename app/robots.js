export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://flaviaferri.dev/sitemap.xml",
    host: "https://flaviaferri.dev",
  };
}
