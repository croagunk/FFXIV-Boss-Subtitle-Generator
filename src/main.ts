import { createApp } from 'vue'
import App from './App.vue'
import { useStore } from './store'

const app = createApp(App)
const store = useStore()

app.config.globalProperties.$store = store
app.use(store)
app.mount('#app')

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'
UIkit.use(Icons)
