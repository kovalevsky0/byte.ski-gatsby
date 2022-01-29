require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    logoTitle: "Byteski",
    title: "Byteski",
    titleTemplate: "%s",
    description:
      "This is a blog about programming and software development in general, written by Byteski",
    keywords: ["programming", "software development", "grokking"],
    siteUrl: process.env.SITE_URL,
    image: "images/default-image.png",
    twitterUsername: "byteski",
    githubUsername: "byteski",
    nav: [
      { path: "/", name: "Home" },
      { path: "/blog", name: "Blog" },
      { path: "/notes", name: "Notes" },
      { path: "/about", name: "About" },
    ],
    copyright: "© Byteski 2022",
    footerNav: [
      { path: "/blog", name: "Blog" },
      { path: "/about", name: "About" },
      { path: "https://twitter.com/byteski", name: "Twitter" },
      { path: "https://github.com/byteski", name: "GitHub" },
    ],
    avatarSrc: "./static/images/avatar.jpg",
    socials: [
      {
        name: "Twitter",
        url: "https://twitter.com/intent/follow?screen_name=byteski",
        icon: "twitter",
      },
      {
        name: "GitHub",
        url: "https://github.com/byteski",
        icon: "github",
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `byteski.net`,
        short_name: `byteski.net`,
        start_url: `/`,
        icon: "./static/images/favicon.png",
        display: `standalone`,
      },
    },
    "gatsby-plugin-ts-config",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `byteski.net`,
      },
    },
    "@byteski/gatsby-midnight-theme",
  ],
};

