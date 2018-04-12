<template>
  <div>
    <text class="entry">Entry3</text>
    <text class="entry">{{ config.bundleUrl }}</text>
  </div>
</template>
<script>
export default {
  data () {
    return {
      config: weex.config // eslint-disable-line
    }
  }
}
</script>
<style scoped>
  .entry {
    font-size: 50px;
  }
</style>
