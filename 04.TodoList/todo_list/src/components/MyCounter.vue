<template>
    <div>
        {{ $store.state.countOptions.sum }} | 
        <!-- {{ $store.getters.bigSum }} |  -->
        {{ sum }} | 
        <!-- {{ bigSum }} |  -->
        <button @click="add(2)">+</button>
    </div>
    
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: 'MyCounter',
    data() {
        return {

        }
    },
    methods: {
        // 触发mutations的两种写法
        // 1.手动调用dispatch
        // add() {
        //     this.$store.dispatch('add', 2)
        // },
        // 2.使用mapMutations生成
        //...mapMutations(['ADD'])
        // 触发actions
        ...mapActions('countOptions', ['add'])
    },
    computed: {
        // vuex获取状态的三种写法
        // 1.靠程序员自己写计算属性 
        // sum() {
        //     return this.$store.sum 
        // },
        // bigSum() {
        //     return this.$store.sum * 10 
        // },
        // 2.借助mapState生成计算属性（对象写法）
        // ...mapState({sum: 'sum'})
        // 3.借助mapState生成计算属性（数组写法）
        ...mapState('countOptions', ['sum']),
        ...mapGetters('countOptions', ['bigSum'])
    }
}
</script>

<style lang="less" scoped>
    button {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }
</style>
