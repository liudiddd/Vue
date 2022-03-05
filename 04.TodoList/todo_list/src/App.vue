<template>
  <div id="app">
    <div class="body">
      <!-- <my-pad /> -->
      <div>
        <router-link to="/about">About</router-link>
        <router-link to="/home">Home</router-link>
        <router-link to="/mypad">MyPad</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyPad from './components/MyPad.vue'

export default {
  name: 'App',
  components: {
    MyPad
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.body {
  width: 400px;
  height: 200px;
  a {
    display: inline-block;
    margin: 10px 20px;
    line-height: 20px;
  }
}
li {
  list-style-type: none;
}
</style>
