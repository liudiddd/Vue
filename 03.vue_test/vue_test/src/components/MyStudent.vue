<template>
    <div>
        <ul>
            <li @click="showName(name)">学生名称：{{ name }}</li>
            <li>学生性别：{{ sex }}</li>
            <li>学生年龄：{{ age }}</li>
        </ul>
    </div>
</template>

<script>
import {hunru1} from '../mixin'
export default {
    data() {
        return {
        }
    },
    props: {
        name: {
            type: String,
            required: true 
        },
        sex: {
            type: String, 
            required: true 
        },
        age: {
            type: Number,
            default: 18 
        }
    },
    mixins: [
        hunru1 
    ],
    methods: {
        hello() {
            console.log('hello')
        }
    },
}
</script>

<style lang="less" scoped>
    /* li {
        text-decoration: none; 
    } */
</style>

