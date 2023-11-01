<template>
  <div class="tab-bar">
    <template v-for="(item,index) in copyRoutes" :key="item.path">
      <div class="tab-pub" v-if="item.path==='/publish'"><img src="@/assets/svg/add.svg" alt=""></div>
      <div class="tab-name"
      v-else 
      :class="{active: index===currentIndex}" 
      @click="handleClick(item.path)">{{ item.name }}</div>
    </template>
  </div>
</template>

<script setup>
import { watch,ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { routes } from '../router/routes'
const copyRoutes = routes.slice(1)
const route = useRoute()
const router = useRouter()
const currentIndex = ref(0)
const handleClick = (path) => {
  router.push({
    path
  })
}
watch(route,(newValue)=>{
  const index = copyRoutes.findIndex(item => item.path === newValue.path)
  if(index===-1)return
  currentIndex.value = index
})
</script>

<style scoped lang="less">
.tab-bar{
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 8vh;
  z-index: 999;
  .tab-name {
    font-size: 0.9rem;
    font-weight: 500;
    color: gray;
    transition: all .1s linear;;
  }
  .tab-pub {
    width: 2.5rem;
    height: 1.5rem;
    background-color: red;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 2rem;
    }
  }
  & .active {
    font-size: 1rem;
    font-weight: 700;
    color: black;
  }
} 
</style>