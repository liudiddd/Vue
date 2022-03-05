<template>
    <div>
        <h2>Hello, this is news page.</h2>    
        <hr>
        <h4>id: {{ $route.query.id }}</h4>
        <h4>title: {{ $route.query.title }}</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>

