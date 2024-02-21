import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { setupVitePlugins } from './build/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [
  //   vue(),
  //   vueJsx(),
  //   AutoImport({
  //     imports: [
  //       'vue',
  //       {
  //         'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
  //       }
  //     ]
  //   }),
  //   Components({
  //     resolvers: [NaiveUiResolver()]
  //   })
  // ],
  plugins: setupVitePlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
