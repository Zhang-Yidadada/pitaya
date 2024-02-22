import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

import type { App } from 'vue'

console.log(import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
