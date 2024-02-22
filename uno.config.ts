import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()]
  // rules: [['m-t-100', { 'margin-top': '100px' }]]
})
