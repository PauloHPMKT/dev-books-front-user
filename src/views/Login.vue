<template>
  <div>
    <form @submit.prevent="createNewUser">
      <div>
        <input type="text" v-model="user.name" placeholder="digite seu nome de usuario" />
      </div>
      <div>
        <input type="text" v-model="user.email" placeholder="Digite seu e-mail" />
      </div>
      <div>
        <input type="password" v-model="user.password" placeholder="digite sua senha">
      </div>
      <div>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      users: [],
      user: {
        name: '',
        email: '',
        password: '',
      }
    }
  },

  methods: {
    async createNewUser() {
      await axios.post('http://localhost:3005/api/user/register', {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password, 
      }).then(res => console.log(res)) 
    }
  }
}
</script>

<style lang="scss" scoped></style>