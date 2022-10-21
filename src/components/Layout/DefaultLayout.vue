<template>
  <div>
    header da pagina
    <main class="container-page">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped></style>