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
  data() {
    return {
      swiperOption: {},
      icomList: [
        {
          id: "01",
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票",
        },
        {
          id: "02",
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          title: "一日游",
        },
        {
          id: "03",
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          title: "踏青赏花",
        },
        {
          id: "04",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          title: "主题乐园",
        },
        {
          id: "05",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          title: "深圳必游",
        },
        {
          id: "06",
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png",
          title: "海滨海岛",
        },
        {
          id: "07",
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          title: "泡温泉",
        },
        {
          id: "08",
          imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
          title: "城市观光",
        },
        {
          id: "09",
          imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
          title: "高空观景",
        },
        {
          id: "10",
          imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
          title: "自然风光",
        }
      ],
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