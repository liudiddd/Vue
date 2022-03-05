<template>
    <input type="text" v-model="hobby" @keyup.enter="add">
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'MyHeader',
    data() {
        return {
            hobby: ''
        }
    },
    methods: {
        add() {
            let todo = {iid: nanoid(), hobby: this.hobby, checked: false} 
            this.$bus.$emit('addTodo', todo) 
            this.hobby = ''
        }
    }
}
</script>

<style lang="less" scoped>
    input {
        width: calc(100% - 4px);
        height: 20px;
        border: 2px solid rgb(149, 149, 253);
        padding: 0;
    }
</style>

