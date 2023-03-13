import { createApp } from 'vue'

import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
library.add(faPlay, faLinkSlash, faBicycle, faCloud, faHeartPulse)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
