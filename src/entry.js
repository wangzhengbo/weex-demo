/* global Vue */

// import hello from 'weex-hello'

// // install the component.
// weex.install(hello)

/* weex initialized here, please do not move this line */
const router = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))

router.push('/record')
