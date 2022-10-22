<template>
  <div class="banner-home">
    <h1>Olá, vamos enriquecer nossa cultura hoje?</h1>
  </div>
  <aside class="aside-container">
    <!-- implementar randomico com a foto dos usuários da plataforma -->
    <div class="aside-content">
      <h3>Junte-se a nós e ajude nossa comunidade a crescer.</h3>
      <p>Este é o lugar certo para quem ama uma boa leitura, adora opinar sobre as obras, ama enriquecer sua cultura e gosta de compartilhar com seus amigos. <span>Aqui você encontra os melhores livros, editoras e autores.</span></p>
    </div>
    <div class="btn-container">
      <MainButton :data_title="btn_title"/>
    </div>
  </aside>
  <section>
    Ultimos Livros Adicionados
  </section>
  <section>
    Em alta
  </section>
  <div>
    editoras
  </div>
  <div>
    Destaques
  </div>
</template>

<script>
import MainButton from '../components/Buttons/MainButton.vue'

export default {
  components: { MainButton },
  name: 'HomeView',
  data() {
    return {
      btn_title: 'Cadastre-se, É de graça!'
    }
  }
}
</script>

<style lang="scss" scoped></style>