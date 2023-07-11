<template>
  <div class="notfound-page">
    <el-result icon="error" title="404" sub-title="该页面不见了">
      <template #extra>
        <el-button type="primary" @click="router.replace({ name: 'home' })">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>

<style lang="scss" scoped>
.notfound-page {
  margin: auto;
}
</style>
