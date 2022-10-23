<template>
  <div class="login-view">
    <div class="box-width">
      Subbanner
    </div>
    <div class="box-width form-config">
      <div class="slide-controls">
        <input type="radio" name="slide" id="enter" checked @click="formLogin" />
        <input type="radio" name="slide" id="register" @click="formRegister" />
        <label for="enter" class="slide enter">Entrar</label>
        <label for="register" class="slide register">Cadastrar</label>
        <div class="slider-tab"></div>
      </div>
      <div class="form-data-container">
        <div class="form-inner">
          <FormLogin 
            @submitLogin="handleSubmitLogin"
            v-if="callFormLogin"
          />
          <FormRegister 
            @createNewUser="handleCreateNewUser"
            v-if="callFormRegister"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from '../components/Forms/FormLogin.vue'
import FormRegister from '../components/Forms/FormRegister.vue'
export default {
  name: 'Login',
  components: { FormRegister, FormLogin },
  data() {
    return {
      callFormLogin: true,
      callFormRegister: false,
    }
  },

  methods: {
    formLogin() {
      this.callFormRegister = false
      this.callFormLogin = true
    },

    formRegister() {
      this.callFormLogin = false
      this.callFormRegister = true
    },

    handleCreateNewUser(user) {
      console.log(user)
    }
  }
}
</script>

<style lang="scss" scoped></style>