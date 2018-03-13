module.exports = {
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "The Automation Platform", // Site title.
  siteTitleAlt: "Automium Docs", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://automium.entercloudsuite.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Learn how to deploy and manage your cloud infrastructure with Automium and Enter Cloud Suite.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "", // GA tracking ID.
  userName: "User", // Username to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/entercloudsuite",
      iconClassName: "fa fa-github"
    },
    {
      label: "Email",
      url: "mailto:support@entercloudsuite.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017 entercloudsuite.com", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "INFRASTRUCTURE", "APPLICATIONS", "SERVICES", "ADMIN"] // Used to generate the Table Of Contents. Index 0 should be blank.
};
