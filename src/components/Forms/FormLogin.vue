<template>
  <div class="spacing-form">
    <h2 class="title-form">Faça seu login</h2>
    <form @submit.prevent="$emit('submitLogin', user)">
      <div class="form-fields">
        <div>
          <label for="emaillog">E-mail:</label>
          <div class="input-styles">
            <input type="text" id="emaillog" v-model="user.email" placeholder="meuemail@example.com" />
          </div>
        </div>
        <div>
          <label for="passwrod">Senha:</label>
          <div class="input-styles">
            <input :type="inputType" id="password" v-model="user.password" />
            <RevelingPassword 
              @toggle="togglePassword"
              :isPassword="isPasswordVisible"
            />
          </div>
        </div>
        <div class="spacing-btn">
          <MainButton 
            type="submit"
            :data_title="btn_title"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import MainButton from '../Buttons/MainButton.vue'
import RevelingPassword from '../Buttons/RevelingPassword.vue'
export default {
  name: 'FormLogin',
  components: { MainButton, RevelingPassword },
  emits: ['submitLogin'],
  data() {
    return {
      btn_title: 'Login',
      inputType: 'password',
      user: {
        email: '',
        password: '',
      }
    }
  },

  computed: {
    isPasswordVisible() {
      return this.inputType === 'text'  
    }
  },

  methods: {
    togglePassword() {
      this.inputType = this.isPasswordVisible ? 'password' : 'text'
    }
  }
}
</script>

<style lang="scss" scoped></style>