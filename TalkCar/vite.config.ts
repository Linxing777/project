import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 预先加载UI
import Components from 'unplugin-vue-components/vite'
// 引入vant组件库 编译阶段
import { VantResolver} from '@vant/auto-import-resolver'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template:{
        compilerOptions:{isCustomElement:(tag) => tag.startsWith('wc-') }
    }
    }),
    Components({
      resolvers: [
        VantResolver()
      ]
    }),
    
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, 'src')
    }
  }
})