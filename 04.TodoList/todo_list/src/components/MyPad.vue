<template>
    <div class="pad">
        <my-header />
        <my-list />
        <my-footer />
        <my-counter />
        <my-axios />
        <my-animation />
    </div>
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyList from './MyList.vue'
import MyFooter from './MyFooter.vue'
import MyCounter from './MyCounter.vue'
import MyAnimation from './MyAnimation.vue'
import MyAxios from './MyAxios.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter,
    MyCounter,
    MyAnimation,
    MyAxios
  }
}
</script>

<style lang="less" scoped>
.pad {
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border: 1px solid rgb(130, 130, 131);
  box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3); 
}
</style>
