<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>aaa</div>
    <my-school />
    <hello-world msg="hello wwwwww"/>
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue'

export default {
  name: 'App',
  components: {
    MySchool,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
