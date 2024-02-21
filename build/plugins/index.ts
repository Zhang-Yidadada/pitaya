import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { setupElegantRouter } from './router'
import { setupUnplugin } from './unplugin'

export function setupVitePlugins() {
  const plugins = [vue(), vueJsx(), setupElegantRouter(), ...setupUnplugin()]
  return plugins
}
