<template>
  <div>
    <wxc-button text="Open Popup"
                @wxcButtonClicked="buttonClicked">
    </wxc-button>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked">
    </wxc-popup>
    <text>{{ config.bundleUrl }}</text>
  </div>
</template>

<script>
import { WxcButton, WxcPopup } from 'weex-ui'
// or
// import WxcButton from 'weex-ui/packages/wxc-button'
// import WxcPopup from 'weex-ui/packages/wxc-popup'
module.exports = {
  components: { WxcButton, WxcPopup },
  data: () => ({
    isShow: false,
    config: weex.config // eslint-disable-line
  }),
  methods: {
    buttonClicked () {
      this.isShow = true
    },
    overlayClicked () {
      this.isShow = false
    }
  }
}
</script>
