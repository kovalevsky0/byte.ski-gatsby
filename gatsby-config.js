require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    logoTitle: "novemist",
    title: "novemist",
    titleTemplate: "%s | novemist",
    description:
      "This is a blog about programming and software development in general, written by Max Kowalevski (@novemist)",
    keywords: ["programming", "software development", "grokking"],
    siteUrl: process.env.SITE_URL,
    image: "images/default-image.png",
    twitterUsername: "novemist",
    githubUsername: "novemist",
    nav: [
      { path: "/", name: "Home" },
      { path: "/blog", name: "Blog" },
      { path: "/notes/home", name: "Notes" },
      { path: "/about", name: "About" },
    ],
    copyright: "© novemist.com 2021",
    footerNav: [
      { path: "/blog", name: "Blog" },
      { path: "/about", name: "About" },
      { path: "https://twitter.com/novemist", name: "Twitter" },
      { path: "https://github.com/novemist", name: "GitHub" },
    ],
    avatarSrc: "./static/images/avatar.jpg",
    socials: [
      {
        name: "Twitter",
        url: "https://twitter.com/intent/follow?screen_name=novemist",
        icon: "twitter",
      },
      {
        name: "GitHub",
        url: "https://github.com/novemist",
        icon: "github",
      },
      {
        name: "Patreon",
        url: "https://www.patreon.com/novemist",
        icon: "patreon",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `novemist.com`,
        short_name: `novemist.com`,
        start_url: `/`,
        icon: "./static/images/favicon.png",
        display: `standalone`,
      },
    },
    "gatsby-plugin-ts-config",
    "gatsby-plugin-robots-txt",
    "@novemist/gatsby-novemist-theme",
  ],
};
