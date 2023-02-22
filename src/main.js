import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import StatusComponents from './Status.vue'

/* Vue.component('AppStatus', StatusComponents) */

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component('Appstatus',StatusComponents)
  .mount('#app')
  
