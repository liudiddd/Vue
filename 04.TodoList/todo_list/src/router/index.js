import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import MyPad from '../components/MyPad.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

Vue.use(VueRouter)

// 创建并暴露一个路由器 
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'}
                },
                {
                    name: 'xiaoxi',
                    path: 'message/:id/:title',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    props: true  
                }
            ]
        },
        {
            path: '/mypad',
            component: MyPad
        }
    ]
})

// 全局前置路由守卫，即每个路由切换之前回调 
router.beforeEach((to, from, next) => {
    console.log('to:', to)
    console.log('from:', from)
    // 动态判断是否放行 
    // if(/^\/home\/message\//.test(to.path)) {
    if(to.meta.isAuth) {
        if(localStorage.getItem('school') === 'atguigu') {
            next() 
        } else {
            alert('学校名不对，无权限查看。')
        }
    } else {
        next() 
    }
    
})

// 后置路由守卫
router.afterEach((to, from) => {
    document.title = to.meta.title || '尚硅谷' 
})

export default router 