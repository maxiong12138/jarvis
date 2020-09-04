<template>
    <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">                                                          
            <li v-for='(item,index) of hotCities' :key="index" class="hot-item" @click="changeCity($event)">{{item}}</li>
            <!-- {{hotCities}} -->
        </ul>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props:['hotCities'],
    data(){
        return{
            
        }
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
    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.hot{
    margin-top: 0.88rem;
}
.hot-title{
    font-size: 0.24rem;
    color:#212121;
    padding:0.2rem  0.3rem;
}
.hot-list{
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
    position: relative;
}
.hot-item{
    text-align: center;
    width: 33.33333%;
    height: 0.9rem;
    line-height: 0.9rem;
    border-bottom: 0.02px solid #ddd;
    border-right: 0.02px solid #ddd;
    color: #212121;
    float: left;
}


</style>

