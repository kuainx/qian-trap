<template>
  <view class="index">
    <view>
      <img
        src=""
        alt=""
      >
    </view>
    {{ state.msg }}
    <Dongdong />
    <view class="btn">
      <nut-button
        type="primary"
        @click="handleClick('text', state.msg2, true)"
      >
        点我
      </nut-button>
    </view>
    <nut-toast
      v-model:visible="state.show"
      :msg="state.msg2"
      :type="state.type"
      :cover="state.cover"
    />
  </view>
</template>

<script setup>
import { Dongdong } from "@nutui/icons-vue-taro"

definePageConfig({
  navigationBarTitleText: "首页",
})
const state = reactive({
  msg: "欢迎使用 NutUI4.0 开发小程序",
  msg2: "你成功了～",
  type: "text",
  show: false,
  cover: false,
})

const handleClick = (type, msg, cover = false) => {
  state.show = true
  state.msg2 = msg
  state.type = type
  state.cover = cover
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
