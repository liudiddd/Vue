<template>
    <div>
        <div>
            <button @click="show = !show">切换</button>
        </div>
        <transition name="hello" appear>
            <h1 v-show="show">hello animation</h1>
        </transition>
        <transition-group name="world" appear>
            <h2 v-show="show" v-for="(item, idx) in students" :key="idx">{{ `${item.name} ${item.age}` }}</h2>
        </transition-group>
        <transition 
            name="animate__animated animate__bounce animate__delay-2s" 
            enter-active-class="animate__pulse" 
            leave-active-class="animate__pulse"
            appear>
            <h2 v-show="show">使用animate.css效果</h2>
        </transition>
        <transition-group 
            name="animate__animated animate__bounce animate__delay-2s" 
            enter-active-class="animate__rubberBand" 
            leave-active-class="animate__rubberBand"
            appear>
            <h2 v-show="show" v-for="(item, idx) in students" :key="idx">{{ `${item.name} ${item.age}` }}</h2>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name: 'MyAnimation',
    data() {
        return {
            show: true,
            students: [
                {
                    name: '张三',
                    age: 18
                },
                {
                    name: '李四',
                    age: 20
                }
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    h1, h2 {
        width: 300px;
        height: 50px;
        background-color: rgb(145, 195, 238);
        margin: 10px 0;
    }
    /* 封装动画  */
    .hello-enter-active {
        animation: atguigu 1s linear;
    }
    .hello-leave-active {
        animation: atguigu 1s linear reverse;
    }
    @keyframes atguigu {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
    /* 封装过渡 */
    .world-enter { /* 进入的起点 */
        transform: translateX(-100%);
    }
    .world-enter-active { /* 进入的过程 */
        transition: 0.5s linear;
    }
    .world-enter-to { /* 进入的终点 */
        transform: translateX(0px);
    }
    .world-leave { /* 离开的起点 */
        transform: translateX(0px); 
    }
    .world-leave-active { /* 离开的过程 */
        transition: 0.5s linear;
    }
    .world-leave-to { /* 离开的终点 */
        transform: translateX(-100%);
    }
</style>

