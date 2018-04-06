<template>
  <div>
    <weex-hello style="txt-color:#fff; bg-color:green" value="WEEX" onclick="handleClick"></weex-hello>
  </div>
</template>
<script>
// @see https://github.com/MrRaindrop/weex-hello-web
export default {
  methods: {
    handleClick (e) {
      alert('e.value : ' + e.value)
    }
  }
}
</script>
