const config = require("./config.json")
const infoData = require("./content/data/info.json")

module.exports = {
  siteMetadata: {
    title: config.title,
    siteUrl: config.site_url,
    description: config.description,
    author: config.author,
    //contact: config.contact,
    infoData: infoData,
    keywords: config.seo_keywords 
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",	  
    "gatsby-transformer-yaml",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.talgaertner.de',
        sitemap: 'https://www.talgaertner.de/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },	  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.talgaertner.de`,
      },
    },
    {
      resolve: 'gatsby-plugin-html2amp',
      options: {
        files: ['**/*.html', 'index.html'],
        publicPath: 'public',
        //gaConfigPath: 'gaConfig.json',
        dist: 'public/dist',
        optimize: true,
        htmlPlugins: [],
        cssPlugins: []
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "services",
        path: `${__dirname}/content/services`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images_cms",
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Talgaertner`,
        short_name: `Talgaertner`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    { 
      resolve:`gatsby-plugin-sass`,
      options: {
        data: `
         $font: ${config.font}; 
         $background: ${config.header_background};
         $font_pc: ${config.font_size_pc}px;
         $font_4K: ${config.font_size_4k}px;
         $font_mobile: ${config.font_size_mobile}px;`
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `44200929358`, //`rekxsh` 7005914713
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-normalize-paths",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
