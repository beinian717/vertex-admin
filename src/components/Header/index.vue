<template>
    <div class="header">
      <div class="personal">
        <el-badge is-dot>
          <el-icon>
            <Bell />
          </el-icon>
        </el-badge>
        <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            欢迎您！{{ username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="User" command="user">个人中心</el-dropdown-item>
              <el-dropdown-item icon="SwitchButton" command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import router from '@/router'
  import useUserStore from '@/store/user'
  import { storeToRefs } from 'pinia'
  
  
  const userStore = useUserStore()
  const { username } = storeToRefs(userStore)
  const handleCommand=(command:string)=>{
      console.log(command)
      if(command=="user"){
        router.push('/personal')
      }else{
        userStore.logout();
        router.push('/login')
      }
  }
  </script>
  
  <style lang="scss" scoped>
  .header {
    padding: 0 20px;
    height: 60px;
    background-color: #f5f5f5;
  
    .personal {
      height: 60px;
      float: right;
      display: flex;
      align-items: center;
  
      .el-badge,.el-avatar {
        margin-right: 20px;
      }
    }
  }
  </style>