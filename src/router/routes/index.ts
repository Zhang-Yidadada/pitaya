import type { ElegantRoute, CustomRoute } from '@elegant-router/types'
import { generatedRoutes } from '../elegant/routes'
import { layouts, views } from '../elegant/imports'
import { transformElegantRoutesToVueRoutes } from '../elegant/transform'

const customRoutes: CustomRoute[] = [
  {
    name: 'root',
    path: '/',
    redirect: '/home',
    meta: {
      title: 'root',
      constant: true
    }
  }
]

const elegantRoutes: ElegantRoute[] = [...customRoutes, ...generatedRoutes]

console.log(generatedRoutes)

export const routes = transformElegantRoutesToVueRoutes(elegantRoutes, layouts, views)
