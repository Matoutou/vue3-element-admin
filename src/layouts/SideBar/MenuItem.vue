<template>
  <el-icon v-if="item.meta.elIcon"> <Component :is="item.meta.elIcon"></Component> </el-icon>
  <span>{{ item.meta.title }}</span>
</template>

<script setup lang="ts">
// TODO 后续支持自定义svg-icon
defineProps<{
  item: any
}>()
</script>
