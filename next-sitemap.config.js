/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://boundlessbolt.netlify.app", // Replace with your actual site URL
  generateRobotsTxt: true, // Generate a `robots.txt` file
  // exclude: ["/server-sitemap-index.xml"],  // Removed exclusion
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://boundlessbolt.netlify.app/server-sitemap-index.xml", // Add sitemap here
    ],
  },
  sitemapSize: 5000, // index XML sitemaps in multiple files with this max size
  exclude: ["/private/**"], // exclude specific paths
  dynamicPages: ["/blog/:slug", "/products/:id"], // add dynamic routes
};
