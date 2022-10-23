<template>
  <div>
    <h2 class="title-form">Faça seu login</h2>
    <form>
      <div class="form-fields">
        <div>
          <label for="email">E-mail:</label>
          <div class="input-styles">
            <input type="text" id="email" v-model="user.email" placeholder="meuemail@example.com" />
          </div>
        </div>
        <div>
          <label for="passwrod">Senha:</label>
          <div class="input-styles">
            <input type="password" id="password" v-model="user.password" />
          </div>
        </div>
        <div class="spacing-btn">
          <MainButton 
            :data_title="btn_title"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import MainButton from '../Buttons/MainButton.vue'
export default {
  components: { MainButton },
  name: 'FormLogin',
  data() {
    return {
      btn_title: 'Login',
      user: {
        email: '',
        password: '',
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>