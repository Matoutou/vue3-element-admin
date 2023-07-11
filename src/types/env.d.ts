/// <reference types="vite/client" />

// Element Plus
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/en.mjs'

// npm
declare module 'path-browserify'

// to fix import vue component error
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
