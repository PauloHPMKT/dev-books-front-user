<template>
  <div class="login-view">
    <div class="box-width">
      Subbanner
    </div>
    <div class="box-width form-config">
      <div>
        <!-- Aplicar transition entre os formularios -->
        <label for="">Entrar</label>
        <label for="">Cadastrar</label>
      </div>
      <!-- implementar formulario de login -->
      <FormRegister />
    </div>
  </div>
</template>

<script>
import FormRegister from '../components/Forms/FormRegister.vue'
export default {
  components: { FormRegister },
  name: 'Login',
}
</script>

<style lang="scss" scoped></style>