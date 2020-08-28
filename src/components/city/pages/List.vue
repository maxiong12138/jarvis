<template>
    <div class="list">
        <div>
            <div class="list-title">A</div>
            <ul class="list-msg clearfloat">
                <li class="list-item">阿坝藏族羌族自治州</li>
                <li class="list-item">阿克苏地区</li>
                <li class="list-item">阿克苏地区</li>
                <li class="list-item">阿克苏地区</li>
                <li class="list-item">阿克苏地区</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="stylus">
@import "../../../assets/css/common.styl"
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.list-title{
    font-size: 0.24rem;
    color:#212121;
    padding:0.2rem  0.3rem;
}
.list-msg{
    background-color: #fff;
}
.list-item{
    width: 25%;
    text-align: center;
    font-size: 0.28rem;
    line-height: 0.9rem;
    float: left;
    border-bottom: 0.02rem solid #ddd;
    border-right: 0.02rem solid #ddd;
    textOverflow()
}

</style>

