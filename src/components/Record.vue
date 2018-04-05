<template>
  <div class="record">
    <text>Status: {{ status }}</text>
    <text>Ret: {{ ret }}</text>
    <text class="button" @click="start">Start#</text>
    <text class="button" @click="stop">Stop#</text>
  </div>
</template>
<script>
import Nat from 'natjs'
export default {
  data () {
    return {
      status: '',
      ret: ''
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
          this.ret = ret
        })
      } catch (e) {
        // this.status = 'error'
        this.status = e
      }
    }
  }
}
</script>
<style scoped>
  .button {
    font-size: 100px;
    margin: 50px 0;
  }
</style>
