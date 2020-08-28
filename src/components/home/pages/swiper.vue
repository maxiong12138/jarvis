<template>
  <div class="hander-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,subscript) of swiperList" :key="subscript">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script type="text/javascript">
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "carrousel",
  props:["swiperList"],
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },
    };
  },
};
</script>

<style scoped>
.hander-swiper {
  background-clip: #ccc;
  height: 100px;
  width: 100%;
  float: left;
}
.hander-swiper img {
  width: 100%;
  height: 100px;
}
</style>