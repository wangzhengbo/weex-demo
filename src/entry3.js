/* weex initialized here, please do not move this line */
const router = require('./router')
const App = require('@/index2.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))

router.push('/entry3')
