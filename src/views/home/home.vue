<template>
  <div class="home">
    <div class="tab">
    <div><img class="icon" src="@/assets/svg/view.svg" alt=""></div>
    <div class="tab-name">
      <van-tabs 
      v-model:active="tabActive" 
      color="red" line-width="25" line-height="2" swipeable 
      replace>
        <template v-for="(item,index) in tabName" :key="item">
          <van-tab :title="item" :name="item"></van-tab>
        </template>
</van-tabs>
  </div>
    <div><img class="icon" src="@/assets/svg/search.svg" alt=""></div>
    </div>
    <Discovery ref="discoveryRef" v-show="tabActive === '发现'"></Discovery>
    <!-- <Discovery ref="discoveryRef" v-show="tabActive === '关注'"></Discovery> -->
    <!-- <Discovery ref="discoveryRef" v-show="tabActive === '购物'"></Discovery> -->
  </div> 
</template>

<script setup>
import { ref,onMounted, nextTick} from 'vue';
import Discovery from './cpns/discovery.vue'
const discoveryRef = ref(null)
let tabActive = ref('');
let loadListener = ref(null)
const tabName = ref(['发现',"关注","购物"])



 
</script>

<style scoped lang="less">
.home{
  // padding-bottom: 8vh;
  // overflow-y: auto;
 .tab {
  position: relative;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3rem;
  padding: 0 .6rem;
  .tab-name {
    :deep(.van-tab) {
      margin: 0 1rem;
    }
  }
    
  .icon {
    width: 1.5rem;
    margin-top: .5rem;
  }
}
 
}
</style>