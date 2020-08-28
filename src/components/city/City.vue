<template>
    <div class="city">
        <city-header></city-header>
        <city-hot></city-hot>
        <city-sort></city-sort>
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
    }
}
</script>

<style scoped>
.city{
    background-color: #F5F5F5;
}
</style>