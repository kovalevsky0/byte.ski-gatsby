require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    logoTitle: "Max Kovalevsky",
    title: "Max Kovalevsky",
    titleTemplate: "%s",
    description:
      "This is a blog about programming and software development in general, written by Max Kowalevski",
    keywords: ["programming", "software development", "grokking"],
    siteUrl: process.env.SITE_URL,
    image: "images/default-image.png",
    twitterUsername: "mxkwl",
    githubUsername: "kowalevski",
    nav: [
      { path: "/", name: "Home" },
      { path: "/blog", name: "Blog" },
      { path: "/notes", name: "Notes" },
      { path: "/about", name: "About" },
    ],
    copyright: "© Max Kowalevski 2021",
    footerNav: [
      { path: "/blog", name: "Blog" },
      { path: "/about", name: "About" },
      { path: "https://twitter.com/mxkwl", name: "Twitter" },
      { path: "https://github.com/kowalevski", name: "GitHub" },
    ],
    avatarSrc: "./static/images/avatar.jpg",
    socials: [
      {
        name: "Twitter",
        url: "https://twitter.com/intent/follow?screen_name=mxkwl",
        icon: "twitter",
      },
      {
        name: "GitHub",
        url: "https://github.com/kowalevski",
        icon: "github",
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kowalevski.com`,
        short_name: `kowalevski.com`,
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
        domain: `kowalevski.com`,
      },
    },
    "@kowalevski/gatsby-midnight-theme",
  ],
};
