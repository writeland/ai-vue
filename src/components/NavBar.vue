<template>
  <div class="navbar">
    <div class="navbar-left">
      <span class="navbar-title">{{ currentTitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentTitle = computed(() => route.meta?.title || '首页')
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  .navbar-left {
    .navbar-title {
      font-size: 16px;
      font-weight: 600;
      color: #303133;
    }
  }
}
</style>
