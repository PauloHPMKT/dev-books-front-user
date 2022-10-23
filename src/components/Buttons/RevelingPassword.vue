<template>
  <span @click="$emit('toggle')">
    <Icon icon="carbon:view" id="view-icon" v-if="isPassword" />
    <Icon icon="carbon:view-off" id="view-icon" v-else />
  </span>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'RevelingPassword',
  components: { Icon },
  emits: ['toggle'],
  props: {
    isPassword: Boolean,
  }
}
</script>

<style lang="scss" scoped></style>