<template>
    <transition name="todo" appear>
        <li class="item">
            <input type="checkbox" @change="change" :checked="todo.checked">
            <p v-show="!todo.isEdit">{{ todo.hobby }}</p>
            <input type="text" ref="editInput" v-show="todo.isEdit" :value="hobby" @blur="edited" @keyup.enter="edited"> 
            <button class="btn-edit" :iid="todo.iid" @click="editItem(todo)">编辑</button>
            <button class="btn-delete" :iid="todo.iid" @click="deleteItem">删除</button>
        </li>
    </transition>
</template>

<script>
export default {
    name: 'MyItem',
    data() {
        return {
            
        }
    },
    props: {
        todo: Object
    },
    computed: {
        hobby() {
            return this.todo.hobby 
        }
    },
    watch: {
        checked(newVal) {
            this.$emit('changeChecked', newVal, this.todo.iid)
        }
    },
    methods: {
        deleteItem() {
            this.$emit('deleteOne', this.todo.iid)
        },
        change($event) {
            console.log($event)
            this.$emit('changeTodo', this.todo.iid, $event.target.checked)
        },
        editItem(todo) {
            if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
                // this.todo.isEdit = true /* eslint-disable */
                todo.isEdit = true 
            } else {
                this.$set(todo, 'isEdit', true) 
            }
            this.$nextTick(() => {
                this.$refs.editInput.focus() 
            })
        },
        edited(event) {
            console.log(event.target.value) 
            this.$emit('edited', this.todo, event.target.value) 
        }
    }
}
</script>

<style lang="less" scoped>
    .item {
        width: calc(100% - 2px);
        height: 26px;
        border-radius: 5px;
        line-height: 26px;
        &:hover {
            background-color: rgb(197, 197, 197);
            button {
                display: block;
            }
        }
        input[type=checkbox] {
            float: left;
            line-height: 26px;
            height: 100%;
            display: inline-block;
            margin: 0 5px;
        }
        p {
            float: left;
            margin: 0 10px;
        }
        .btn-edit {
            display: none;
            float: right;
            background-color: rgb(139, 252, 105);
            border: solid 1px rgb(139, 252, 105);
            border-radius: 5px;
            height: 24px;
            width: 50px;
            margin: 1px 0;
            &:hover {
                cursor: pointer;
            }
        }
        .btn-delete {
            display: none;
            float: right;
            background-color: rgb(250, 92, 92);
            border: solid 1px rgb(250, 92, 92);
            border-radius: 5px;
            height: 24px;
            width: 50px;
            margin: 1px 0;
            &:hover {
                cursor: pointer;
            }
        }
    }
    /* 封装动画  */
    .todo-enter-active {
        animation: atguigu 0.2s linear;
    }
    .todo-leave-active {
        animation: atguigu 0.2s linear reverse;
    }
    @keyframes atguigu {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-100%);
        }
    }
</style>
