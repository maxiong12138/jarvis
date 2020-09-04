<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe611;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe6e1;</span>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      <router-link to="/city">
      {{city}}<span class="iconfont">&#xe644;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city'])
  },
};
</script>

<style scoped lang='stylus'>
@import '../../../assets/css/var.styl'

.header {
  width: 100%;
  line-height: 0.88rem;
  background: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
  display: flex;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bolder;
}

.header-search {
  flex: 1;
  background-color: #fff;
  border-radius: 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  margin: 0.14rem 0;
  color: #e4e7ea;
  font-size: 0.28rem;
  padding-left: 0.2rem;
}

.header-right {
  font-size: 0.28rem;
  padding: 0 0.2rem;
}
.header-right a {
  color #fff
}
</style>