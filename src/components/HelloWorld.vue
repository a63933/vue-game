<template>
  <div class="hello">
    <el-input v-model="username" placeholder="用户名"></el-input>
    <el-input type="password" v-model="password" placeholder="密码"></el-input>
    <el-input v-model="cellphone" placeholder="手机号"></el-input>
    <el-button @click="addUser" type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: '',
      cellphone: ''
    }
  },
  created () {
    setTimeout(() => {
      console.log('page is ready.')
    }, 20)
  },
  methods: {
    addUser () {
      console.log(`${this.username},${this.password},${this.cellphone}`)
      axios.get('http://localhost:10002/register/register', {params: {
        'username': `${this.username}`,
        'password': `${this.password}`,
        'cellphone': `${this.cellphone}`
      }}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
