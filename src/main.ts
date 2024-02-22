import { createApp } from 'vue'
import 'uno.css'
import '@/styles/global.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import { setupRouter } from './router'

async function setupApp() {
  const app = createApp(App)

  app.use(createPinia())
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
