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
  data(){
    return{
      hotList:[
        {
          id:"01",
          imgUrl:"http://img1.qunarzz.com/sight/p0/1604/e0/e074ca39741daad890.water.jpg_250x250_b8020e8f.jpg",
          title:"深圳欢乐谷",
          mark:"113.5"
        },
        {
          id:"02",
          imgUrl:"http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_250x250_b592c33d.jpg",
          title:"深圳野生动物园",
          mark:"49.6"
        },{
          id:"03",
          imgUrl:"http://img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_250x250_540fc25d.jpg",
          title:"世界之窗",
          mark:"98"
        },{
          id:"04",
          imgUrl:"http://img1.qunarzz.com/sight/p0/1508/de/cdaac63f6f60646439b27b641d3326d4.water.jpg_250x250_dc5857bb.jpg",
          title:"东部华侨城大侠谷",
          mark:"149.5"
        },{
          id:"05",
          imgUrl:"http://img1.qunarzz.com/sight/p0/201403/04/abf9d2133fbfc65ac5d7d15eebebd374.jpg_250x250_202b2227.jpg",
          title:"锦绣中华民俗村",
          mark:"94"
        },{
          id:"06",
          imgUrl:"http://img1.qunarzz.com/sight/p0/1805/ab/ab4fccbc392da994a3.water.jpg_250x250_2dd2a345.jpg",
          title:"观澜山水田园水上乐园",
          mark:"85.5"
        },{
          id:"07",
          imgUrl:"http://img1.qunarzz.com/sight/p0/1412/6f/5d803c45af314b68f4652362fca42d11.water.jpg_250x250_952b7c21.jpg",
          title:"青青世界",
          mark:"72.5"
        },{
          id:"08",
          imgUrl:"http://img1.qunarzz.com/sight/p0/1802/39/39ec37884650dd97a3.img.png_250x250_ad9e90c3.png",
          title:"深圳平安金融中心",
          mark:"165"
        },{
          id:"09",
          imgUrl:"http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_250x250_b9ebca61.jpg",
          title:"海洋奇梦馆",
          mark:"60"
        },{
          id:"10",
          imgUrl:"http://img1.qunarzz.com/sight/p0/1810/df/df65113c1322333fa3.water.jpg_250x250_cde69668.jpg",
          title:"地王大厦",
          mark:"51.5"
        }
      ]
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