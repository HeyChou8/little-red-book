export const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/video',
      name: '视频',
      component: () => import('../views/video/video.vue')
    },
    {
      path: '/publish',
      name: '发布',
      component: () => import('../views/publish/publish.vue')
    },
    {
      path: '/message',
      name: '消息',
      component: () => import('../views/message/message.vue')
    },
    {
      path: '/user',
      name: '我',
      component: () => import('../views/user/user.vue')
    }
  ]