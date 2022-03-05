<template>
    <div>
        <h2>Hello, this is message page.</h2>  
        {{ $route.params.id }}  {{ $route.params.title }}
        <br>
        {{ id }} - {{ title }}
    </div>
    
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: [
        'id',
        'title'
    ]
}
</script>

<style lang="less" scoped>
    
</style>

