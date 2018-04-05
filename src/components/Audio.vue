<template>
  <div>
      <text @click="play">Play Audio</text>
  </div>
</template>
<script>
import Nat from 'natjs'

export default {
  methods: {
    play () {
      console.log('Nat.audio', Nat.audio)
      if (Nat.audio) {
        Nat.audio.play('http://cdn.instapp.io/nat/samples/audio.mp3')
      }
    }
  }
}
</script>
