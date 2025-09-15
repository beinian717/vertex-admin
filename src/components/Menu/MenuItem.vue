<template>

    <el-menu-item :index="item.url" @click="add(item.name, item.url, item.icon)">
        <el-icon>
            <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
    </el-menu-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
})
</script>