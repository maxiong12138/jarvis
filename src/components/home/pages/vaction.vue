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
    data(){
        return{
            vactionList:[
                {
                    id:"01",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg",
                    title:"深圳周边游",
                    msg:"远离城市拥堵，去周边开启清新假期吧。"
                },
                {
                    id:"02",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
                    title:"清远周边逛",
                    msg:"人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？"
                },
                {
                    id:"03",
                    imgUrl:"http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
                    title:"浮在海上的绿洲",
                    msg:"南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊"
                },
            ]
        }
    }
}
</script>

<style scoped>
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
   white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>


