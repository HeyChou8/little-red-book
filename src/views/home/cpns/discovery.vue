<template>
  <div class="discovery">
    <div class="discovery-item" ref="discoveryItemRef">
        <template v-for="(item,index) in mockData" :key="item.id">
      <discovery-item :item-data="item" @onImgLoaded="loadImgCount"></discovery-item>
    </template>
    </div>
    
    
  </div>
</template>

<script setup>
import { reactive,ref,defineExpose} from 'vue';
import discoveryItem from '@/components/discovery-item.vue';
import {mock} from '@/mock/mock.js'
import computeWaterFallFlow from '@/utils/waterFallFlow.js'
let mockData = reactive([])
let imglen // 记录需要加载的总图片数
const initData = () => {
  let res = mock()
  imglen = res.length
  res.forEach(item => {
    mockData.push(item)
  })
}
initData()
// 瀑布流计算每个item的位置
const discoveryItemRef = ref()

// 记录item中的image是否加载完毕
let imgCount = 0
const loadImgCount = () => {
  imgCount++
  if(imgCount === imglen){
    // 开始计算瀑布流
    computeWaterFallFlow(discoveryItemRef.value)
  }
}
// const funcomputeWaterFallFlow = () => {
//   computeWaterFallFlow(discoveryItemRef.value)
// }
// defineExpose({
//   funcomputeWaterFallFlow
// })

</script>

<style scoped lang="less">
.discovery{
  
  position: relative;  
  height: calc(100vh - 3rem - 8vh);
  background-color: aliceblue;
  overflow: auto;
} 
</style>