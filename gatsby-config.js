/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.yourswritefully.com",
      },
    },
    {
      resolve: "@rennehir/gatsby-theme-personal-site",
      options: {
        siteTitle: "Yours writefully",
        siteDescription:
          "This is an example site of gatsby-theme-personal-site",
        siteUrl: "http://www.yourswritefully.com",
        // Set your page's content's base paths
        blogBasePath: "/blog", // default: /blog
        portfolioBasePath: "/portfolio", // default: /portfolio
        referencesBasePath: "/references", // default: /references
        servicesBasePath: "/services", // default: /services
      },
    },
  ],
}
