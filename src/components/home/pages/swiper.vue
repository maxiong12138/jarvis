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

  data() {
    return {
      swiperList: [
        {
          id: "01",
          imgUrl:
            "http://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg",
        },
        {
          id: "02",
          imgUrl:
            "http://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg",
        },
        {
          id: "03",
          imgUrl:
            "http://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg",
        },
      ],
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