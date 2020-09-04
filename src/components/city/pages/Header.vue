<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/"><span class="iconfont">&#xe611;</span></router-link>
    </div>
    <div class="header-title">城市选择</div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style scoped lang='stylus'>
@import '../../../assets/css/var.styl'

.header {
  width: 100%;
  line-height: 0.88rem;
  height 0.88rem
  background: $bgColor;
  color: $textColor;
  font-size: 0.32rem;
  position fixed;
  top :0;
  left :0;
  z-index :10
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bolder;
  position :absolute;
}

.header-left span{
    color :$textColor;
}

.header-title{
    text-align :center;
}

</style>