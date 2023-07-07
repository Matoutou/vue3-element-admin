<template>
  <svg class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  className?: string
}>()
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
