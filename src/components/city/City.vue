<template>
    <div class="city">
        <city-header></city-header>
        <city-hot :hotCities="hotCities"></city-hot>
        <city-sort :cities="cities"></city-sort>
        <city-list></city-list>
    </div>
</template>

<script>
import CityHeader from "./pages/Header"
import CityHot from "./pages/Hot"
import CitySort from "./pages/Sort"
import CityList from "./pages/List"
export default {
    name:"City",
    components:{
        CityHeader,
        CityHot,
        CitySort,
        CityList,
    },
    data(){
        return{
            hotCities:[],
            cities:{}
        }
    },
    methods: {
        async init(){
            let city=await this.city;
            console.log(city)
            for(var i=0;i<city.data.length;i++){
                this.hotCities =city.data[i].hotCities;
                this.cities=city.data[i].cities
            }
            console.log(JSON.parse(JSON.stringify(this.hotCities)))
        }
    },
    mounted() { 
        this.init();
    },
}
</script>

<style scoped>
.city{
    background-color: #F5F5F5;
}
</style>