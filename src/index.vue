<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <text class="greeting" @click="push('entry2')">{{ config.bundleUrl }}</text>
    <router-link class="link" to="/geolocation">Geolocation</router-link>
    <router-link class="link" to="/test">Test</router-link>
    <router-link class="link" to="/test">Audio</router-link>
    <router-link class="link" to="/record">Record</router-link>
    <router-view/>
  </div>
</template>

<script>
import mixin from './mixins/index'

export default {
  name: 'App',
  mixins: [mixin],
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      config: weex.config // eslint-disable-line
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .link {
    margin: 30px;
    font-size: 40px;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
