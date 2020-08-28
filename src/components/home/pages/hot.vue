<template>
  <div class="hot">
    <div class="hot-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
      <span>本周热门榜单</span>
      <span class="hot-right">全部榜单 ></span>
    </div>
    <ul class="hot-list">
      <li v-for="item in hotList" :key="item.id" class="hot-item">
        <img :src="item.imgUrl">
        <p>{{item.title}}</p>
        <p>
          <span class="hot-mark">¥{{item.mark}}</span>起
        </p>
      </li>
    </ul>  
  </div>
</template>

<script>
export default {
  props:["hotList"],
  data(){
    return{
      
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/css/common.styl'
.hot{
  margin-top: 0.2rem;
  background-color: #fff;
  font-size: 0.28rem;
  position: relative;
}
.hot-top{
  padding: 0.2rem;
}
.hot-top span{
  font-size:0.32rem ;
  color: #212121;
}
.hot-top .hot-right{
  position: absolute;
  right: 0.2rem;
  color:#616161;
  font-size: 0.28rem;
}
.hot-top img{
  width: 0.3rem;
  height: 0.3rem;
}
.hot-list{
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 3rem;
}
.hot-item{
  display: inline-block;
  padding: 0 0.2rem;
  width: 2rem;
  height: 2rem;
}
.hot-item p{
  margin-top: 0.1rem;
  text-align: center;
  textOverflow()
}
.hot-item img{
  width: 100%;
  height: 100%;
}
.hot-item p .hot-mark{
  color: #ff8300;
  font-size: 0.32rem;
}
</style>