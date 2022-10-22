<template>
  <header class="header">
    <router-link to="/">
      <img src="/img/livraria-do-dev-logo.png" alt="Logo DevBooks">
    </router-link>
    <NavBar :routers="this.router_list.name"/>
  </header>
</template>

<script>
import NavBar from '@/components/Header/NavBar.vue'

export default {
  name: 'Header',
  components: { NavBar },
  data() {
    return {
      router_list: {
        name: ['Livros', 'Editora', 'Autores', 'Adicionados', 'Topmais', 'Encontre outros usuários', 'Login'],
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>