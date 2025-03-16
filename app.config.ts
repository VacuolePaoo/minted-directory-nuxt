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
        type: 'shadow',
      },
      submit: {
        show: true,
        first: false,
        title: '提交新的网站',
        description:
          '将你收藏的网站也加入进来，分享给更多人',
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
      { name: 'AI', color: 'indigo' },
      { name: '知识', color: 'green' },
      { name: '工具', color: 'blue' },
    ],
    tagPages: {
      title: '有 {0} 个属于此分类的页面:',
      description:
        '在 {0} 个分类中查看所有收藏...',
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
        { name: '收藏夹', to: '/' },
        { name: '博客', to: '/blog' },
        { name: '好东西', to: '/advertise' },
        {
          name: '统计',
          to: 'https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ',
          target: '_blank',
        },
      ],
    },
    actionButton: {
      text: '提交网站',
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