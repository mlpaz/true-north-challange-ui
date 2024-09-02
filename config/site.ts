export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  apiBaseUrL: process.env.API_URL,
  name: "True North Challenge",
  description: "Full Stack True North Challenge",
  navItems: [
    {
      label: "Calculator",
      href: "/home/operation/math",
    },
    {
      label: "String Generator",
      href: "/home/operation/string-generator",
    },
    {
      label: "Records",
      href: "/home/records",
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
