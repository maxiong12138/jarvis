<template>
  <div class="city">
    <city-header></city-header>
    <city-hot :hotCities="hotCities"></city-hot>
    <city-sort :cities="cities"></city-sort>
    <city-list :cities="cities"></city-list>
  </div>
</template>

<script>
import CityHeader from "./pages/Header";
import CityHot from "./pages/Hot";
import CitySort from "./pages/Sort";
import CityList from "./pages/List";
export default {
  name: "City",
  components: {
    CityHeader,
    CityHot,
    CitySort,
    CityList,
  },
  data() {
    return {
      // 城市源信息
      cityData: {},
      hotCities: [],
      cities: [],
    };
  },
  methods: {
     init() {
      let city = this.city;
      //city对象中每个可枚举的属性全部复制放入新的cityData中
      Object.assign(this.cityData, city);
      
      let hotCities = [];
      let Cities = [];
      //在将得到新的cityData对象中属性hotCities属性找出来，在放入hotCities数组中
      Object.assign(hotCities, this.cityData.data.hotCities);
     
      this.cities=Object.values(this.cityData.data.cities)
      
      // console.log(this.cities);
      
      //forEach遍历hotCities数组中，item返回需要的对象,index返回的下标,
      hotCities.forEach((item, index) => {
        let cityName = item.name;
        //每遍历的到的name属性在添加到数组中，重新放回页面，此时得到的是一个（包含城市名的）数组
        this.hotCities.push(cityName);
      });
      // console.log(this.hotCities);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.city {
  background-color: #f5f5f5;
}
</style>