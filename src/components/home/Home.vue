<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icom></home-icom>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot></home-hot>
  </div>
</template>

<script>
import HomeHeader from "./pages/header";
import HomeSwiper from "./pages/swiper";
import HomeIcom from "./pages/icom";
import HomeLocation from "./pages/location";
import HomeActivity from "./pages/activity";
import HomeHot from "./pages/hot";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcom,
    HomeLocation,
    HomeActivity,
    HomeHot,
  },
};
</script>

<style>
.home{
  background-color: #eee;
}
</style>