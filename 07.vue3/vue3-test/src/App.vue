<template>
  <div>
    <button @click="changeInfo">更改信息</button>
    <h3>name: {{ name }}</h3>
    <h3>age: {{ age }}</h3>
    <h3>job: {{ job.type }}</h3>
    <h3>salary: {{ job.salary }}</h3>
  </div>
  
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    
  },
  setup() {
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: 30
    })
    let changeInfo = function() {
      name.value = '李四'
      age.value = 20
      job.value.type = 'UI设计师'
      job.value.salary = 60
    }
    return {
      name,
      age,
      job,
      changeInfo
    }
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
