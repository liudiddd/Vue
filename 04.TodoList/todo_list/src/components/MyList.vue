<template>
    <div class="content">
        <my-item 
            v-for="(item) in itemList" 
            @deleteOne="deleteOne" 
            @changeTodo="changeTodo" 
            @edited="edited"
            @checkAll="checkAll"
            :key="item.iid" 
            :todo="item"
        />
    </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    data() {
        return {
            itemList: [
                {
                    hobby: '打代码',
                    iid: 1,
                    checked: false 
                },
                {
                    hobby: '睡觉',
                    iid: 2,
                    checked: false 
                },
                {
                    hobby: '吃饭',
                    iid: 3,
                    checked: false 
                },
                {
                    hobby: '打cf',
                    iid: 4,
                    checked: false 
                },
            ]
        }
    },
    components: {
        MyItem
    },
    created() {
        this.$bus.$on('addTodo', this.addTodo)
        this.$bus.$on('clearDone', this.clearDone)
        this.$bus.$on('checkAll', this.checkAll)
    },
    watch: {
        itemList: {
            deep: true,
            handler: function() {
                this.$bus.$emit('count', this.itemList.length,
                    this.itemList.filter((item)=>{return item.checked}).length)
            }
        },
    },
    methods: {
        deleteOne(iid) {
            this.itemList.splice(this.itemList.getIdx((item) => {return item.iid===iid}), 1)
            console.log('this.itemList', this.itemList)
        },
        changeTodo(iid, checked) {
            this.itemList.forEach(item => {
                if(item.iid == iid) item.checked = checked 
            })
            console.log(this.itemList.map((item) => {return item.checked}))
        },
        addTodo(todo) {
            this.itemList.unshift(todo) 
        },
        edited(todo, hobby) {
            todo.hobby = hobby 
            todo.isEdit = false
            console.log(todo)
        },
        clearDone() {
            this.itemList = this.itemList.filter((item) => { 
                return !item.checked
            })
        },
        checkAll(checked) {
            this.$nextTick(() => {
                this.itemList.forEach((item) => {
                    item.checked = checked 
                })
            })
        }
    }

}
</script>

<style lang="less" scoped>
    
    /* 设置滚动条的样式 */
    ::-webkit-scrollbar {
    width:5px;
    }
    /* 滚动槽 */
    ::-webkit-scrollbar-track {
        -webkit-box-shadow:rgba(0,0,0,0.9);
        border-radius:3px;
    }
    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
        border-radius:10px;
        background:rgba(0,0,0,0.3);
        -webkit-box-shadow:rgba(0,0,0,0.7);
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background:rgba(248, 248, 248, 0.9);
    }
    .content {
        width: 100%;
        height: 114px;
        overflow: scroll;
        list-style-type: none;
        margin: 10px 0;
        border-bottom: 1px solid rgb(175, 175, 175);
    }
</style>
