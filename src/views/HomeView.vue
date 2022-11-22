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
      <router-link to="/login">
        <MainButton :data_title="btn_title"/>
      </router-link>
    </div>
  </aside>
  <section class="padding-size books-updated">
    <header class="header-add">
      <h2>Ultimos Livros Adicionados</h2>
      <span>Ver mais</span>
    </header>
    <div class="books-container">
      <div v-for="book in books" :key="book._id" class="book-container">
        <img :src="book.poster" :alt="book.title">
      </div>
    </div>
  </section>
  <section class="padding-size books-updated">
    <header class="header-add">
      <h2>Livros em alta</h2>
      <span>Ver mais</span>
    </header>
    <div class="books-container">
      <div v-for="book in books" :key="book._id" class="book-container">
        <img :src="book.poster" :alt="book.title">
      </div>
    </div>
  </section>
  <section class="padding-size books-updated">
    <header class="header-add">
      <h2>Editoras</h2>
      <span>Ver mais</span>
    </header>
    <div class="books-container">
      <div class="publishing-container">
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
        <div class="publishing-list">teste</div>
      </div>
    </div>
  </section>
  <div>
    Indicação DevBooks
  </div>
</template>

<script>
import ServiceBooks from '../service-api/axios-request.books'
import MainButton from '../components/Buttons/MainButton.vue'

export default {
  components: { MainButton },
  name: 'HomeView',
  data() {
    return {
      btn_title: 'Cadastre-se, É de graça!',
      books: [],
    }
  },

  methods: {
    async renderAllBooks() {
      await ServiceBooks.getAllBooks().then(res => {
        this.books = res.data
      })
    },

    teste() {
      alert('ok')
    }
  },

  mounted() {
    this.renderAllBooks()
  }
}
</script>
