<template>
  <div>
    <text>Platform: {{ platform }}</text>
    <template v-if="platform === 'Web'">
      <text @click="start">For Web</text>
      <audio ref="audio" src="http://cdn.instapp.io/nat/samples/audio.mp3" autoplay></audio>
    </template>
    <text v-else>For Native</text>
  </div>
</template>
<script>
// eslint-disable-next-line
const platform = weex.config.env.platform

export default {
  data () {
    return {
      platform
    }
  },
  methods: {
    start () {
      // eslint-disable-next-line
      if (document) {
        // eslint-disable-next-line
        const audio = document.createElement('audio');
        audio.src = 'http://cdn.instapp.io/nat/samples/audio.mp3'
        audio.play()
      }
    }
  }
}
</script>
