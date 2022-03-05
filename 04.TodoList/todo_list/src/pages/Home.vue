<template>
    <div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <h2>Hello, this is home page.</h2>    
        query传参
        <br>
        <!-- query传参原始写法 -->
        <!-- <router-link to="/home/news?id=777&title=美帝利用乌克兰对抗俄罗斯">news</router-link> -->
        <!-- query传参字符串写法 -->
        <router-link v-for="item in newsList" :to="`/home/news?id=${item.id}&title=${item.title}`" :key="item.id">{{ item.id }}</router-link>
        <br>
        <!-- query传参对象写法 -->
        <router-link v-for="item in newsList" :to="{
            // path: '/home/news', // 此处可以写命令路由，即name:'路由名字'，效果一样
            name: 'xinwen',
            query: {
                id: item.id,
                title: item.title
            }
        }" :key="'obj'+item.id">
            {{ 'obj '+item.id }}
        </router-link>
        <br>
        params传参
        <br>
        <!-- params传参 -->
        <router-link v-for="item in messageList" :to="`/home/message/${item.id}/${item.title}`" :key="item.id">{{ item.id }}</router-link>
        <br>
        <router-link v-for="item in messageList" :to="{
            name: 'xiaoxi',
            params: {
                id: item.id,
                title: item.title
            }
        }"  :key="'obj'+item.id">
            {{ 'obj '+item.id }}
        </router-link>        
        <div>
            <!-- <keep-alive>标签内部出现过的组件都被缓存 -->
            <keep-alive> 
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsList: [
                {id: '001', title: '国际军团准备入境乌克兰'},
                {id: '002', title: '乌克兰局势有这些新进展'},
                {id: '003', title: '中国最晚2025称为高收入国家'}
            ],
            messageList: [
                {id: '1001', title: '夯实民主基础'},
                {id: '1002', title: '奋进新征程'},
                {id: '1003', title: '冬奥会纪录片'}
            ],

        }
    },
    methods: {
        back() {
            this.$router.back() 
        },
        forward() {
            this.$router.forward() 
        }
    },
}
</script>

<style lang="less" scoped>
    
</style>

