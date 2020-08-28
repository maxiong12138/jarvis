<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icom :icomList="icomList"></home-icom>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot :hotList="hotList"></home-hot>
    <home-like :likeList="likeList"></home-like>
    <home-vaction :vactionList="vactionList"></home-vaction>
  </div>
</template>

<script>
import HomeHeader from "./pages/header";
import HomeSwiper from "./pages/swiper";
import HomeIcom from "./pages/icom";
import HomeLocation from "./pages/location";
import HomeActivity from "./pages/activity";
import HomeHot from "./pages/hot";
import HomeLike from "./pages/like";
import HomeVaction from "./pages/vaction";



export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcom,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,
    HomeVaction,
  },
  data(){
    return{
      swiperList:[],
      icomList:[],
      hotList:[],
      likeList:[],
      vactionList:[],
    }
  },
  mounted() {
    this.axios.get("http://localhost:8080/static/mock/dataHome.json").then(result=>{
      // console.log(result.data.data)
      const data=result.data.data[0];
      this.swiperList=data.swiperList;
      this.icomList=data.icomList;
      this.hotList=data.hotList;
      this.likeList=data.likeList;
      this.vactionList=data.vactionList;
    })
  },
};
</script>

<style>
.home{
  background-color: #eee;
}
</style>