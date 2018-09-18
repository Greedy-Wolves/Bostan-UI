import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import fa from 'vuetify/es5/locale/fa'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { fa },
    current: 'fa'
  },
})
