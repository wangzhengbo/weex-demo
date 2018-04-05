<template>
  <div class="record">
    <text>Status: {{ status }}</text>
    <text>Ret: {{ ret }}</text>
    <text class="button" @click="start">Start Record</text>
    <text class="button" @click="stop">Stop Record</text>
    <text class="button" @click="startAudio">Play Recorded Audio</text>
    <text class="button" @click="pauseAudio">Pause Recorded Audio</text>
    <text class="button" @click="stopAudio">Stop Recorded Audio</text>
  </div>
</template>
<script>
import Nat from 'natjs'

export default {
  data () {
    return {
      status: '',
      ret: '',
      audio: ''
    }
  },
  mounted () {
    try {
      if (Nat.audio && Nat.audio.play) {
        Nat.audio.play('http://cdn.instapp.io/nat/samples/audio.mp3')
      }
    } catch (e) {
      this.status = e
    }
  },
  methods: {
    start () {
      this.status = 'starting'
      try {
        Nat.recorder.start(() => {
          this.status = 'started'
        })
      } catch (e) {
        // this.status = 'error'
        this.status = e
      }
    },
    stop () {
      this.status = 'stopping'
      try {
        Nat.recorder.stop((err, ret) => {
          this.status = err || 'stopped'
          if (!err) {
            this.ret = ret
            this.audio = ret.path
          }
        })
      } catch (e) {
        // this.status = 'error'
        this.status = e
      }
    },
    startAudio () {
      if (this.audio) {
        this.status = `play audio ${this.audio}`
        Nat.audio.play(this.audio, () => {
          this.status = 'started'
        })
      } else {
        this.status = 'no audio'
      }
    },
    pauseAudio () {
      if (this.audio) {
        Nat.audio.pause(() => {
          this.status = 'paused'
        })
      }
    },
    stopAudio () {
      if (this.audio) {
        Nat.audio.play(this.audio, () => {
          this.status = 'stopeed'
        })
      }
    }
  }
}
</script>
<style scoped>
  .button {
    font-size: 40px;
    margin: 10px 0;
  }
</style>
