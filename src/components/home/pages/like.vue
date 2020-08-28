<template>
    <div class="like">
        <div class="like-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢
        </div>
        <ul>
            <li class="like-itme border-bottom" v-for="(item,key) in likeList" :key="key">
                <div class="like-flex">
                     <div class="like-img" >
                        <img :src="item.imgUrl">
                    </div>
                    <div class="like-text">
                        <div class="like-title">{{item.title}}</div>
                        <div class="like-msg">{{item.msg}}条评论</div>
                        <div class="like-map">
                            <span class="like-title-map">¥<b>{{item.price}}</b></span>起
                            <span class="like-mark">{{item.map}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["likeList"],
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.like{
    margin-top: 0.2rem;
    font-size: 0.28rem;
    background-color: #fff;
    padding: 0 0.2rem;
}
.like-top{
    font-size: 0.32rem;
    padding: 0.2rem 0
}
.like-top img{
    width: 0.3rem;
    height: 0.3rem;
}
.like-itme{
    position: relative;
    padding: 0.2rem 0;
    
} 
.like-flex{
    display: flex;
}
.like-img img{
    width: 2rem;
    height: 2rem;
}
.like-text{
    padding-left: 0.2rem;
    width: 5rem;
    position: relative;
}
.like-title{
    margin-top: 0.4rem;
    color: #212121;
    font-size: .32rem;
}
.like-msg{
    margin-top: 0.3rem;
    color: #616161;
    font-size: .24rem;
}
.like-map{
    margin-top: 0.3rem;
}
.like-title-map{
    color: #ff8300;
    position: relative;
}
.like-title-map b{
    color: #ff8300;
    font-size: 0.4rem;
}
.like-mark{
    position: absolute;
    right: 0.3rem;
    margin-top: 0.1rem;
    color: #616161;
    font-size: .24rem;
}

</style>
