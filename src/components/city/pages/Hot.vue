<template>
    <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
            <li class="hot-item">深圳</li>
            <li class="hot-item">深圳</li>
            <li class="hot-item">深圳</li>
            <li class="hot-item">深圳</li>
            <li class="hot-item">深圳</li>
            <li class="hot-item">深圳</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

