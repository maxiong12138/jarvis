<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icom :icomList="icomList"></home-icom>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot :hotList="hotList"></home-hot>
    <home-like :likeList="likeList"></home-like>
    <home-vaction :vacationList="vacationList"></home-vaction>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  data() {
    return {
      swiperList: [],
      icomList: [],
      hotList: [],
      likeList: [],
      vacationList: [],
    };
  },
  methods: {
    // ------------------------------------------------------------------------------ 修改>
    async init() {
      //把局部dataHome赋值为全局的数据里的内容
      let dataHome = await this.dataHome;
      console.log(dataHome);
      for (var i = 0; i < dataHome.data.length; i++) {
        this.swiperList = dataHome.data[i].swiperList;
        this.icomList = dataHome.data[i].icomList;
        this.hotList = dataHome.data[i].hotList;
        this.likeList = dataHome.data[i].likeList;
        this.vacationList = dataHome.data[i].vacationList;
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
.home {
  background-color: #eee;
}
</style>