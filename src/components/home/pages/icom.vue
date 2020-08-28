<template>
  <div class="icoms clearfloat">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,key) in page" :key="key">
        <div v-for="page in item" :key="page.id" class="icoms-item">
          <img :src="page.imgUrl" />
          <p>{{page.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div v-for="(item,i) of icomList" :key="i" class="icoms-item ">
      <img :src="item.imgUrl" />
      <p>{{item.title}}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  props:["icomList"],
  data() {
    return {
      swiperOption: {},
      
    };
  },
  computed: {
    page() {
      let pages = [];
      this.icomList.forEach((item,index) => {
        // console.log(index);
        // console.log(item);
        let idx = Math.floor(index / 8);
        if (!pages[idx]) pages[idx] = [];
        pages[idx].push(item);
      });
      return pages;
    },
  },
};
</script>

<style scoped>
.icoms{
  overflow: hidden;
  width: 100%;
  background-color: #fff;
}

.icoms-item {
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  float: left;
}
.icoms-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}
.icoms-item p {
  margin-top: 0.1rem;
  text-align: center;
  color: #212121;
  font-size: 0.28rem;
}
</style>