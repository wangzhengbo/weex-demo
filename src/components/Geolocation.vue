<template>
  <text class="message">
    Nat: {{ Nat }},
      Geolocation: err - {{ err }}, ret - {{ ret }}.
  </text>
</template>
<script>
import Nat from 'natjs'

export default {
  data () {
    return {
      Nat: Nat,
      err: '',
      ret: ''
    }
  },
  mounted () {
    Nat.geolocation.get((err, ret) => {
      this.err = err
      this.ret = ret
    })
  }
}
</script>
