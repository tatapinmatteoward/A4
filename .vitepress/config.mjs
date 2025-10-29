import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nature'S Remedy Blog",
  description: "A modern website dedicated to alternative natural medicine, offering practical step-by-step solutions using nature's remedies to address common health problems. Explore evidence-based approaches to holistic wellness, from herbal cures to lifestyle tips, all backed by nature's bounty.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
      { text: 'Resources', link: '/resources' }
    ],
    socialLinks: [],
    footer: {
      message: 'Built with VitePress & AI',
      copyright: `Copyright © ${new Date().getFullYear()} Nature'S Remedy Blog`
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#4CAF50' }],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  appearance: 'dark',
  lastUpdated: true
})
