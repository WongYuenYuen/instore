<template>
  <div class="__car-720__" style="position:relative;top:100px">
    <div style="position:absolute;top:30px;left:58px;z-index:4;">
      <img src="img/720-1.png" alt="" id="img720" style="display:block">
      <img src="img/360-2.png" alt="" id="img360">
    </div>
    <div id="container" style="width:750px;height:632px;display:none;position:absolute;z-index:3;">
    </div>
    <div id="colorList" style="width:100%;margin:auto; text-align:center;z-index:2;position: absolute;">
      <ul id="listUlId" style="list-style-type:none;padding-left:0px;"></ul>
    </div>
    <canvas id="mycanvas" width="750" height="632" style="z-index:1;position: absolute;background-color:transparent"></canvas>
  </div>
  </div>
</template>

<script>
// import './img/720-1.png';
// import
  export default {
    data: function(){
      return {
        img1: img1,
        img2: img2
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
