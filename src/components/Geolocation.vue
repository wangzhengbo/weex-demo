<template>
  <text class="message">
      geolocation: {{ typeof geolocation }}, {{ Object.keys(geolocation) }}
      Geolocation: err - {{ err }}, ret - {{ ret }}.
  </text>
</template>
<script>
import Nat from 'natjs'
// eslint-disable-next-line
const geolocation = weex.requireModule('nat/geolocation')

export default {
  data () {
    return {
      Nat: Nat,
      err: '',
      ret: '',
      geolocation
    }
  },
  mounted () {
    this.err = 'mounted'
    try {
      Nat.call('415-736-0000')
      this.err = 'mounted#1'
      if (Nat.geolocation) {
        this.err = 'mounted#2'
        console.log('Nat.geolocation.get', Nat.geolocation.get)
        if (Nat.geolocation.get) {
          this.err = 'mounted#3'
          Nat.geolocation.get((err, ret) => {
            this.err = err
            this.ret = ret
          })
          this.err = 'mounted#31'
        } else {
          this.err = 'mounted#4'
          this.err = 'No Nat.geolocation.get'
        }
      } else {
        this.err = 'mounted#5'
        this.err = 'No Nat.geolocation'
      }
    } catch (e) {
      this.err = e
    }
  }
}
</script>
