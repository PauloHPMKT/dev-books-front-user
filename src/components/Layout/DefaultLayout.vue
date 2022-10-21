<template>
  <div>
    <Header />
    <main class="container-page">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '../Header/Header.vue'
export default {
  components: { Header },
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped></style>