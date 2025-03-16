export default defineAppConfig({
  general: {
    title: 'Vacuole\'s Favourites',
    logo: '/favicon.svg',
    iconLogo: 'fluent-emoji-flat:leaf-fluttering-in-wind',
    language: 'zh-CN',
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: 'Vacuole\'s Favourites',
    description: '液泡的网站收藏夹',
    url: 'https://fav.vacuole.top',
    favicon: {
      image: '/favicon.svg',
      emoji: '🍃',
    },
  },
  directory: {
    listingPageLayout: 'card',
    search: {
      placeholder: '在 {0} 个收藏中寻找...',
      icon: 'tabler:binoculars',
      tags: {
        // options: none,select,show-all,
        display: 'show-all',
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: '此分类下没有内容',
        // options: button, simple, link
        type: 'simple',
        icon: 'tabler:exclamation-mark',
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: 'dashed',
      },
      submit: {
        show: '',
        first: false,
        title: 'Submit a template',
        description:
          'Submit a template to show off a good project to other people.',
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: 'tabler:star',
      labelForCard: '推荐 ✨',
    },
    tags: [
      { name: 'SAAS', color: 'blue' },
      { name: 'dashboard', color: 'green' },
      { name: 'landing-page' },
      { name: 'toolbox' },
      { name: 'agency' },
      { name: 'markdown-based' },
      { name: 'basics', color: 'indigo' },
    ],
    tagPages: {
      title: 'Available {0} products:',
      description:
        'View all available tools and templates in the {0} category...',
    },
  },
  header: {
    banner: {
      show: false,
      text: 'Create your own directory website in minutes.',
      link: 'https://minteddirectory.com',
      brandText: 'MintedDirectory',
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: 'Directory', to: '/' },
        { name: 'Blog', to: '/blog' },
        { name: 'Advertise', to: '/advertise' },
        {
          name: 'Analytics',
          to: 'https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ',
          target: '_blank',
        },
      ],
    },
    actionButton: {
      text: 'Submit a listing',
      href: '/submit',
    },
  },
  footer: {
    description: "Best directory for my niche.",
    navigation: [
      {
        title: "Directory", links: [{ title: "Submit", link: "/submit" }, { title: "Advertise", link: "/advertise" }],
      },
      {
        title: "Categories", links: [
          { title: "SAAS", link: "/tags/saas" },
          { title: "Dashboard", link: "/tags/dashboard" },
          { title: "Landing Page", link: "/tags/landing-page" },
          { title: "Toolbox", link: "/tags/toolbox" },
        ],
      },
      {
        title: "Blog", links: [{ title: "Articles", link: "/blog" }],
      },
      {
        title: "Legal", links: [{ title: "Privacy Policy", link: "/legal/terms-of-service" }, { title: "Terms of Service", link: "/legal/privacy-policy" }],
      },
    ],
    socials: {
      github: {
        link: '',
        icon: 'tabler:brand-github',
      },
      facebook: {
        link: '',
        icon: 'tabler:brand-facebook',
      },
      instagram: {
        link: '',
        icon: 'tabler:brand-instagram',
      },
      x: {
        link: 'https://x.com/mark_bruderer',
        icon: 'tabler:brand-twitter',
      },
      youtube: {
        link: 'https://www.youtube.com/@mark_hacks',
        icon: 'tabler:brand-youtube',
      },
    },
  },
  ui: {
    icons: {
      dark: 'tabler:moon',
      light: 'tabler:sun',
    },
  },
});