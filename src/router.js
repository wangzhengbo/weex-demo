/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Geolocation from '@/components/Geolocation'
import Audio from '@/components/Audio'
import Record from '@/components/Record'
import Test from '@/components/Test'
// import WeexHelloWeb from '@/components/WeexHelloWeb'
import ExtendHtml5 from '@/components/ExtendHtml5'
import WxButton from '@/components/weex-ui/Button'
import Entry2 from '@/components/Entry2'
import Entry3 from '@/components/Entry3'

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
    },
    {
      path: '/wx-button',
      name: 'WxButton',
      component: WxButton
    },
    {
      path: '/entry2',
      name: 'Entry2',
      component: Entry2
    },
    {
      path: '/entry3',
      name: 'Entry3',
      component: Entry3
    }
  ]
})
