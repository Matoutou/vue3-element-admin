import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 菜单和面包屑中的名称
    title?: string
    // 定义图标 name
    svgIcon?: string
    //  Element Plus图标 name
    elIcon?: string
    // 是否始终显示根路由
    alwaysShow?: boolean
    // 隐藏该路由
    hidden?: boolean
  }
}
