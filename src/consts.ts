// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "☠️ tiffs.dev",
  description: "meu cantinho pessoal na indieweb",
  lang: "pt-BR",
  profile: {
    author: "tiffany",
    description: "dev java • vegana • jardineira digital"
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
  https://github.com/thesabbir/simple-line-icons
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "ph:books",
    friendlyName: "wiki",
    link: "https://wiki.tiffs.dev",
  },
  {
    icon: "ph:github-logo",
    friendlyName: "github",
    link: "https://github.com/tiffanyrossi",
  },
  {
    icon: "ph:fediverse-logo",
    friendlyName: "fediverso",
    link: "https://brejo.us/@tiffs",
  },
  {
    icon: "ph:envelope-simple",
    friendlyName: "email",
    link: "mailto:oi@tiffs.dev",
  },
  {
    icon: "ph:rss-simple",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "sobre",
    path: "/sobre",
  },
  {
    title: "blog",
    path: "/blog",
  },
  {
    title: "now",
    path: '/now'
  },
  {
    title: "blogroll",
    path: '/blogroll'
  },
  {
    title: 'viagens',
    path: '/viagens'
  },
];
