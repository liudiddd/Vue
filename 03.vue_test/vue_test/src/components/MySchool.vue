<template>
    <div>
        <ul>
            <li @click="showName(school.name)">学校名称：{{ school.name }}</li>
            <li>学校地址：{{ school.address }}</li>
        </ul>
        <my-student name="张三" sex="男" age="20"/>
    </div>
</template>

<script>
import MyStudent from './MyStudent.vue'
import {hunru1} from '../mixin'
export default {
    data() {
        return {
            school: {
                name: '尚硅谷',
                address: '宏福科技园'
            }
        }
    },
    mixins: [
        hunru1
    ],
    components: {
        MyStudent
    },
}
</script>

<style lang="less" scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>

