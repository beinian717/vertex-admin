<template>
    <div class="logo">
      <img :src="logo" width="45px" height="45px" />
      <h1>Vertex Admin</h1>
    </div>
    <el-menu router :default-active="$route.path">
      <template v-for="item in menus" :key="item.url">
        <menu-item :item="item"/>
      </template>
    </el-menu>
  </template>
  
  <script setup lang="ts">
  import useUserStore from '@/store/user';
  import MenuItem from './MenuItem.vue'
  import logo from '@/assets/img/logo.png'
  
  const userStore = useUserStore();
  const menus = userStore.menu
  </script>
  <style lang="scss" scoped>
  .logo {
    height: 50px;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
      font-size: 22px;
      white-space: nowrap;
      color:rgb(186, 187, 189);
    }
    .el-menu{
      border-right: none;
    }
  }
  
  
  
  </style>