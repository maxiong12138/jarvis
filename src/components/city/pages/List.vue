<template>
  <div class="list">
    <div v-for="(key,index) of cities" :key="index" class="">
      <ul class="list-msg clearfloat">
				 <!-- v-for="(cityName,cityIndex) of citiesType" :key="cityIndex"  -->
				 <!-- 城市首字母标题 -->
        <li class="list-title">{{citiesType[index]}}</li>
				<!-- 城市列表 -->
        <li v-for="(p,i) of key" :key="i" class="list-item" @click="changeCity($event)">{{p.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: ["cities"],
  data() {
    return {
      citiesType: ["A", "B", "C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
    };
  },
  methods: {
        changeCity(e){
          var el = e.currentTarget;
            this.$router.push("/")
            this.changesCity(el);
            // alert(el.innerHTML)
        },
        ...mapMutations(["changesCity"])
    }
};
</script>

<style scoped lang="stylus">
@import '../../../assets/css/common.styl';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 0.24rem;
}

.list-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
  background-color #F5F5F5
}

.list-msg {
  background-color: #fff;
}

.list-item {
  width: 25%;
  text-align: center;
  font-size: 0.28rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
  textOverflow();
}
</style>

