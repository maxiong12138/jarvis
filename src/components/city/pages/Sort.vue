<template>
    <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
            <li v-for="(p,i) of citiesType" :key="i" @click="changes($event)"  class="sort-item">{{p}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    // props:['citiesType'],
    data() {
    return {
      citiesType: ["A", "B", "C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
    };
  },
  methods: {
      changes(e){
          var el = e.currentTarget;
         console.log(el.innerHTML);
      }
  },
}
</script>

<style scoped>
.sort-title{
    font-size: 0.24rem;
    color:#212121;
    padding:0.2rem  0.3rem;
}
.sort-list{
    background-color: #fff;
    font-size: .24rem;
    overflow: hidden;
    position: relative;
}
.sort-item{
    text-align: center;
    width: 16.6666%;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #212121;
    float: left;
}


</style>

