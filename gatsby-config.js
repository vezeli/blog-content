require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `@myletters`,
    siteTitleAlt: `Velibor Želi - Busy with PhD studies & software developing`,
    siteUrl: `https://mylette.rs`,
    siteDescription: `Velibor Želi's blog`,
    author: `Velibor Želi`,
    siteImage: ``,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
	feedTitle: "Velibor Želi's blog",
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/vezeli`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/velibor-zeli/`,
          },
	  {
            name: "RSS",
            url: "https://mylette.rs/rss.xml",
          }
        ],
      },
    },
    //{
    //  resolve: `gatsby-plugin-google-analytics`,
    //  options: {
    //    trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //  },
    //},
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `@myletters`,
        short_name: `@myletters`,
        description: `Personal blog.`,
        start_url: `https://mylette.rs`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
      },
    },
    //`gatsby-plugin-offline`,
    //`gatsby-plugin-netlify`,
  ],
}
