<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icom></home-icom>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot></home-hot>
    <home-like></home-like>
    <home-vaction></home-vaction>
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
};
</script>

<style>
.home{
  background-color: #eee;
}
</style>