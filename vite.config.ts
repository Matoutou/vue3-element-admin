import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动按需引入Element
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/mixin.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('./src/assets/svg/', import.meta.url))],
      symbolId: 'icon-[name]'
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
        // Auto import icon components
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: '/src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: false // true用来生成自动引入的检查文件，生成后改成false
      }
    }),
    Components({
      resolvers: [
        // Auto register icon components
        IconsResolver({
          enabledCollections: ['ep']
        }),
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      dts: '/src/types/components.d.ts'
    }),
    Icons({
      autoInstall: true
    })
  ]
})
