import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en',
      ...en
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh',
      ...zh
    }
  },
})
