import { defineConfig } from '@rsbuild/core'
import { pluginLess } from '@rsbuild/plugin-less'
import { pluginVue2 } from '@rsbuild/plugin-vue2'

export default defineConfig({
  plugins: [pluginVue2(), pluginLess()],
  html: {
    template: 'index.html',
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: ['tailwindcss'],
      },
    },
  },
})
