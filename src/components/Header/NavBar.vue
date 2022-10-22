<template>
  <nav>
    <ul class="menu-navigation">
      <li>
        <router-link v-for="router in routers"  :key="router" :to="`/${ router }`">
          {{ router }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    routers: Array,
  },
}
</script>

<style lang="sass" scoped></style>