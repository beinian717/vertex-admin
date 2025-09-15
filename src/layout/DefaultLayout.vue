<template>
    <el-container>
        <el-aside width="200px">
            <Menu />
        </el-aside>
        <el-container>
            <el-header>
                <TopHeader />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>

</template>

<script setup>
import Menu from '@/components/Menu/index.vue'
import TopHeader from '@/components/Header/index.vue'

</script>

<style scoped lang="scss">
.el-aside {
    height: 100vh;
    background: #1e2129;
}

.el-header {
    padding: 0 !important;
}

.el-main {
    height: 80vh;
    overflow: auto;
}
</style>