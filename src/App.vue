<template>
  <div class="vue-app">
    <el-config-provider :locale="locale">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

// 后续做国际化
const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<style lang="scss" scoped></style>
