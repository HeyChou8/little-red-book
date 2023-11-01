<template>
  <div class="discovery-item">
    <div class="content">
        <img class="icon" v-if="itemData.isVideo" src="@/assets/svg/player.svg" alt="">
        <img class="pic" :src="itemData.imageUrl" alt="" @load="emit('onImgLoaded')">
    </div>
    <div class="title">{{ itemData.title }}</div>
    <div class="bottom">
        <div class="user">
            <img :src="itemData.avatar" alt="">
            <span>{{ itemData.userName }}</span>
        </div>
        <div class="like">
            <img src="@/assets/svg/aixin.svg" alt="">
            <span>{{ itemData.likeCount }}</span>
        </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        defalut: () => ({})
    }
})
const emit = defineEmits(['onImgLoaded'])
</script>

<style scoped lang="less">
.discovery-item{
    width: 50vw;
    height: auto;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: #fff;
    position: absolute;
    .content {
    position: relative;
    .icon {
        position: absolute;
        right: 0.4rem;
        top: 0.4rem;
        width: 1.45rem;
    }
    .pic {
        width: 100%;
    }
    }
    .title {
        margin: 0.2rem 0.5rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
    }
    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0.5rem 0.5rem;
        .user {
            img{
                width: 1rem;
                height: 1rem;
                border-radius: 1rem;
                vertical-align: middle;
            }
            span {
                font-size: .8rem;
                color: gray;
               margin-left: .3rem;
            }
        }
        .like {
            img {
            vertical-align: middle;
            margin-right: .3rem;
            }
            span {
                font-size: .8rem;
                color: gray;
            }
        }
    }
} 
</style>