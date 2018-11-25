<template>
  <div class="hello">
    <el-row :gutter="20">
      <el-col :span="14" :offset="3"><div class="grid-content bg-purple"></div>
        <el-input v-model="username" prefix-icon="el-icon-document" placeholder="用户名"></el-input>
        <el-input type="password" prefix-icon="el-icon-tickets" v-model="password" placeholder="密码"></el-input>
        <el-input v-model="cellphone" prefix-icon="el-icon-mobile-phone" placeholder="手机号"></el-input>
        <el-input v-model="email" prefix-icon="el-icon-message" placeholder="邮箱"></el-input>
        <el-input v-model="city" prefix-icon="el-icon-location-outline" placeholder="城市"></el-input>
        <el-input v-model="interest" prefix-icon="el-icon-bell" placeholder="爱好"></el-input>
        <el-input type="textarea" v-model="introduce" prefix-icon="el-icon-goods" :autosize="{ minRows: 2, maxRows: 4}" placeholder="自我描述"></el-input>
        <el-input v-model="qq" prefix-icon="el-icon-mobile-phone" placeholder="QQ号码"></el-input>
        <el-button @click="addUser" type="primary">注册用户</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import {showMixedString} from '../tools/string'
import qs from 'qs'
import {serveraddress} from '../assets/config/common.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: '',
      cellphone: '',
      email: '',
      city: '',
      interest: '',
      introduce: '',
      qq: ''
    }
  },
  created () {
    setTimeout(() => {
      console.log('page is ready.')
      this.username = showMixedString(8)
      this.password = showMixedString(8)
      this.cellphone = showMixedString(8)
      this.email = showMixedString(8)
      this.city = showMixedString(8)
      this.interest = showMixedString(8)
      this.introduce = showMixedString(1000)
      this.qq = showMixedString(8)
    }, 20)
  },
  methods: {
    addUser () {
      console.log(`${this.username},${this.password},${this.cellphone}`)
      const params = {
        'username': `${this.username}`,
        'password': `${this.password}`,
        'cellphone': `${this.cellphone}`,
        'email': `${this.email}`,
        'city': `${this.city}`,
        'interest': `${this.interest}`,
        'introduce': `${this.introduce}`,
        'qq': `${this.qq}`
      }
      axios.post(`${serveraddress}/register/register`, qs.stringify(params), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((response) => {
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
