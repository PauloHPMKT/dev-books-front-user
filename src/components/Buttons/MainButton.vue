<template>
  <button>{{ data_title }}</button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    data_title: String,
  }
}
</script>

<style lang="scss" scoped></style>