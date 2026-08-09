<template>
  <el-aside width="220px">
    <el-menu class="menu" :default-active="activeMenu" background-color="#304156" text-color="#bfcbd9"
      active-text-color="#409eff" router>
      <div class="sidebar-logo">
        <h1>心理健康AI助手</h1>
        <span>管理后台</span>
      </div>
      <el-menu-item v-for="item in menuRoutes" :key="item.path" :index="`/back/${item.path}`">
        <el-icon v-if="item.meta?.icon">
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 从 router 配置中取 /back 的子路由，后续新增路由自动生效
const backRoute = router.options.routes.find(r => r.path === '/back')
const menuRoutes = computed(() => backRoute?.children ?? [])

const activeMenu = computed(() => route.path)
</script>

<style lang="scss" scoped>
.menu {
  height: 100vh;
  background: #263445;
}

.sidebar-logo {
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding-left: 20px;

  h1 {
    font-size: 18px;
  }

  span {
    font-size: 14px;
    color: #ccc;
  }
}

.el-menu {
  border-right: none;
}
</style>
