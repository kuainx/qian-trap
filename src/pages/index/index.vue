<template>
  <view class="index">
    <view>
      <image src="@/static/logo.png" />
    </view>
    {{ state.msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', state.msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="state.msg" v-model:visible="state.show" :type="state.type" :cover="state.cover" />
  </view>
</template>

<script setup>
const state = reactive({
  msg: '欢迎使用 NutUI3.0 开发小程序',
  msg2: '你成功了～',
  type: 'text',
  show: false,
  cover: false
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
  text-align: center;
}
</style>
