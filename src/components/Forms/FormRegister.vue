<template>
  <div>
    <h2 class="title-form">Dados cadastrais</h2>
    <form @submit.prevent="createNewUser">
      <div>
        <label for="name">Nome e Sobrenome:</label>
        <div class="input-styles">
          <input type="text" id="name" v-model="user.name" />
        </div>
      </div>
      <div>
        <label for="nickname">Apelido:</label>
        <div class="input-styles">
          <input type="text" id="nickname" v-model="user.nickname" placeholder="Esolha um nome para o perfil" />
        </div>
      </div>
      <div>
        <label for="genres">Sexo:</label>
        <div class="input-styles">
          <select name="genres" id="genres" v-model="user.gender">
            <option value="" default>Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </div>
      </div>
      <div>
        <label for="email">E-mail:</label>
        <div class="input-styles">
          <input type="text" id="email" v-model="user.email" placeholder="seuemail@example.com" />
        </div>
      </div>
      <div>
        <label for="address">Endereço</label>
        <div class="input-styles">
          <input type="text" id="address" v-model="user.location.address.street" placeholder="minha rua, n35" />
        </div>
        <div id="align-display">
          <div>
            <label for="city">Cidade:</label>
            <div class="input-styles resize-inpt">
              <input type="text" id="city" v-model="user.location.address.city" placeholder="Fortaleza" />
            </div>
          </div>
          <div>
            <label for="uf">Estado:</label>
            <div class="input-styles resize-uf">
              <input type="text" id="uf" v-model="user.location.address.state" placeholder="UF" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <label for="">Crie sua senha:</label>
        <div class="input-styles">
          <input type="password" v-model="user.password">
        </div>
      </div>
      <div class="spacing-btn">
        <MainButton 
          type="submit"
          :data_title="btn_title"
        />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import MainButton from '../Buttons/MainButton.vue'

export default {
  components: { MainButton },
  name: 'FormRegister',
  data() {
    return {
      btn_title: 'Cadastrar',
      user: {
        name: '',
        nickname: '',
        gender: '',
        email: '',
        location: {
          address: {
            street: '',
            city: '',
            state: '',
          },
        },
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