<template>
  <div class="activity border-top">
    <div class="activity-item  border-right">
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2391106341,901569413&fm=26&gp=0.jpg">
    </div>
    <div class="activity-item">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1202423729,70901778&fm=26&gp=0.jpg">
    </div>
  </div>
</template>>

<script>
export default {
  
}
</script>

<style scoped>
.activity{
  display: flex;
  position: relative;
  margin-top: 0.2rem;
  background-color: #fff;
}
.activity .activity-item{
  flex: 1;
  height: 1.4rem;
  font-size: 0.28rem;
  text-align: center;
}
.activity .activity-item img{
  width: 100%;
  height: 100%;
}
</style>