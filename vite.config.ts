import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {resolve} from 'path'
import path from 'path'

export default defineConfig({
  base:'./',
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue()
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'),
      '@icons':path.resolve(__dirname,'src/assets/icons'),
    }
  },
  server:{
    open:true,
    host:'0.0.0.0'
  }
})