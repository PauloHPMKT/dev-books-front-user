<template>
  <div>
    <Header />
    <main class="container-page">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '../Footer/Footer.vue'
import Header from '../Header/Header.vue'
export default {
  components: { Header, Footer },
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped></style>