<template>
  <header class="header">
    <div class="left">
      <ul class="f">
        <li><i>退出</i> </li>
        <li class="">全屏</li>
        <li> <i></i> 个人中心</li>
      </ul>
    </div>
    <div class="right">消息中心</div>    
  </header>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>
<style >
.header{
  position: fixed;
  width: 100%;
  z-index: 999999999;
  background: blue;
}
.left,.right{
  width: 240px;
  height: 40px;
  background: red;
  text-align: center;
  float: left;
}
.left>ul>li{
  list-style: none;
  float: left;
  margin: 0 0 0 20px;
  line-height: 40px;
}
.center{

  height: 40px;
  background: blue;
}
.right{
  width: 100px;
  height: 40px;
  float: right;
  line-height: 40px;
  background: red;

}
</style>
