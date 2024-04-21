<script setup>

const props = defineProps(['trending', 'index'])
const trending = props.trending;
const index = props.index;

import { useRouter } from 'vue-router'
const { push } = useRouter();

function routeViewGame(){
  push("/game/name/"+trending.name);
}

</script>

<template>
  <input type="radio" name="slide" :id="trending.id" :checked="index === 0">
  <label :for="trending.id" class="cardTrending" :style="{ 'background-image': 'url(' + trending.urlImg + ')', 'background-position': 'center'}" v-on:dblclick="routeViewGame">
      <div class="rowTrending">
          <div class="icon"></div>
      </div>
  </label>
</template>

<style scope>
#trendingBody{
  box-sizing: border-box;
  margin: 30px;
  padding: 0;
  width: 100vh;
}

.wrapper{
  width: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container{
  height: 170px;
  width: 950px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: start;
}

.cardTrending{
  width: 200px;
  border-radius: .75rem;
  background-size: cover;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;
  margin: 0 10px;
  display: flex;
  align-items: flex-end;
  transition: .6s cubic-bezier(.28, -0.03,0,.99);
  box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8);
}

.cardTrending > .rowTrending{
  color: white;
  display: flex;
  flex-wrap: nowrap;
}

.cardTrending > .rowTrending > .icon{
  background: #223;
  color: white;
  border-radius: 50%;
  widows: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

input{
  display: none;
}

input:checked + label{
  width: 900px;
}

</style>