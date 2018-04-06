/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Geolocation from '@/components/Geolocation'
import Audio from '@/components/Audio'
import Record from '@/components/Record'
import Test from '@/components/Test'
// import WeexHelloWeb from '@/components/WeexHelloWeb'
import ExtendHtml5 from '@/components/ExtendHtml5'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/geolocation',
      name: 'Geolocation',
      component: Geolocation
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    // {
    //   path: '/weex-hello-web',
    //   name: 'WeexHelloWeb',
    //   component: WeexHelloWeb
    // },
    {
      path: '/extend-html5',
      name: 'ExtendHtml5',
      component: ExtendHtml5
    }
  ]
})
