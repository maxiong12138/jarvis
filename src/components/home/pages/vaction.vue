<template>
    <div class="vaction">
        <div class="vaction-title">周末去哪儿</div> 
        <ul>
            <li class="vaction-item" v-for="(item,key) in vactionList" :key="key">
                <div class="vaction-img">
                    <img :src="item.imgUrl">
                </div>
                <div class="vaction-msg">
                    <p>{{item.title}}</p>
                    <p>{{item.msg}}</p>
                </div>
            </li>    
        </ul>   
    </div>    
</template>

<script>
export default {
    props:["vactionList"],
    data(){
        return{
            
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../../assets/css/common.styl'
.vaction-title{
    padding: 0.2rem;
    font-size: 0.32rem;
    color: #212121;
}
.vaction-item{
    background-color: #fff;
     font-size: 0.28rem;
     margin-bottom: 0.1rem;
}
.vaction-img{
    width: 100%;
    height: 0;
    padding-bottom: 37.4375%   
}
.vaction-img img{
    width: 100%;
}
.vaction-msg{
    padding: 0.2rem 0 0.2rem 0.2rem
}
.vaction-msg p{
    margin-top: 0.1rem;
    color: #212121;
    font-size: .28rem;
    
}
.vaction-msg p+p{
    color: #616161;
    font-size: .24rem;
    textOverflow()
}
</style>


