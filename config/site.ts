export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  apiBaseUrL: "https://demo-v1-1-5a33.onrender.com",
  name: "True North Challenge",
  description: "Full Stack True North Challenge",
  navItems: [
    {
      label: "Calculator",
      href: "/calculator",
    },
    {
      label: "String Generator",
      href: "/string-generator",
    },
    {
      label: "Records",
      href: "/records",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
