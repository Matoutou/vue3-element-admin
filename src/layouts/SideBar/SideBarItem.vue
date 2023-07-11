<template>
  <el-menu-item
    v-if="!alwaysShowRoot && onlyOneChildren"
    :index="resolvePath(item.children[0].path)"
  >
    <MenuItem :item="item.children[0]"></MenuItem>
  </el-menu-item>

  <el-sub-menu v-else-if="showChildren.length > 0" :index="item.path">
    <template #title>
      <MenuItem :item="item"></MenuItem>
    </template>
    <SideBarItem
      v-for="child in item.children"
      :key="child.name"
      :item="child"
      :base-path="resolvePath(item.path)"
    ></SideBarItem>
  </el-sub-menu>

  <el-menu-item v-else :index="resolvePath(item.path)">
    <MenuItem :item="item"></MenuItem>
  </el-menu-item>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import path from 'path-browserify'
import { type RouteMeta } from 'vue-router'

const props = defineProps<{
  item: any
  basePath?: string
}>()

// 显示的子路由
const showChildren = computed(() => {
  return props.item?.children?.filter((r: { meta: RouteMeta }) => !r.meta?.hidden) || []
})

// 只有一个子路由
const onlyOneChildren = computed(() => {
  return showChildren.value.length === 1
})

// 始终显示根节点
const alwaysShowRoot = computed(() => {
  return props.item.meta?.alwaysShow
})

// 拼接正确的path
const resolvePath = (routePath: string) => {
  return path.resolve(props.basePath, routePath)
}
</script>
