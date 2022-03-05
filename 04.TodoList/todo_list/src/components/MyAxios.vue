<template>
    <div>
        <button @click="login">登录</button>
        <h1>status: {{ loginInfo.status }}</h1>
        <h1>message: {{ loginInfo.message }}</h1>
        <h1>token: {{ loginInfo.token }}</h1>    
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'MyAxios',
    data() {
        return {
            loginInfo: {} 
        }
    },
    methods: {
        /*
            跨域问题解决：
                1.cors（常用），只要后端返回加上Access-Control-Allow-Origin头并指定允许跨域地址即可；
                2.jsonp（几乎不用），只能解决get请求，需要前后端都改；
                3.使用代理服务器（很常用）。
        */
        login() {
            let body = {
                username: 'zsqqq1',
                password: '111111'
            }
            // 根据vue.config.js中devServer的配置，实际后端接口地址会转发到 http://127.0.0.1:8001 
            // axios.post('/user/login',body)
            //     .then((resp) => {
            //         console.log(resp)
            //         this.loginInfo = resp.data 
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
            axios.post('/test.txt',body)
                .then((resp) => {
                    console.log(resp)
                    this.loginInfo = resp.data 
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
}
</script>

<style lang="less" scoped>
    h1 {
        background-color: rgb(165, 250, 144);
        
    }
</style>



