function isWeex() {
  return weex.config.env.platform != 'Web'; // 需要在webpack中自定义
}

export default {
  methods: {
    push(path) {
      if (isWeex()) {
        // console.log('1')
        const modal = weex.requireModule("modal");
        //   modal.toast(
        //     {
        //       message: path + ' / ' + weex.config.bundleUrl,
        //       duration: 0.3
        //     }
        //   )
          // console.log('2')
        let toUrl = ''
          toUrl = weex.config.bundleUrl
            .split("/")
            .slice(0, -1)
            .join("/") +
          "/" +
          path +
          ".js"; // 将a.js的绝对地址转为b.js的绝对地址
          // console.log('3', toUrl)
          // console.log('4', toUrl)

          weex.requireModule("navigator").push({
            url: toUrl,
            // url: 'http://192.168.3.36:8081/dist/entry2.js',
            // url: `{"WeexBundle": "${toUrl}"}`,
            animated: "true"
          }, function() {
            modal.toast(
              {
                // message: '###pushed to ' + `{"WeexBundle": "${toUrl}"}`,
                message: '###pushed to ' + toUrl,
                duration: 4
              }
            );
          });
      } else {
        this.$router.push(path); // 使用vue-router
      }
    },
    pop() {
      if (isWeex()) {
        weex.requireModule("navigator").pop({
          animated: "true"
        });
      } else {
        window.history.back();
      }
    }
  }
};
