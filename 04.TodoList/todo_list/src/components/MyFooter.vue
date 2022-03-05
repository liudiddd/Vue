<template>
    <div class="footer">
        <input type="checkbox" v-model="checked"/>
        <p>已完成 {{ done }} / 全部 {{ total }}</p>
        <button @click="clearDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            done: 0,
            total: 3
        }
    },
    created() {
        this.$bus.$on('count', (total, done) => {
            this.done = done 
            this.total = total
        })
    },
    watch: {
        checked(newVal) {
            this.$bus.$emit('checkAll', newVal)
        }
    },
    methods: {
        clearDone() {
            this.$bus.$emit('clearDone')
        },
    }
}
</script>

<style lang="less" scoped>
    .footer {
        height: 40px;
        width: 100%;
        line-height: 40px;
        input {
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
        button {
            float: right;
            background-color: rgb(250, 92, 92);
            border: solid 1px rgb(250, 92, 92);
            border-radius: 5px;
            height: 24px;
            width: 150px;
            margin: 8px 0;
            &:hover {
                cursor: pointer;
            }
        }
    }
</style>

