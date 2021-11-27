<template>
  <div class="error" v-if="error">
    <p>{{ errorText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
  },
};
</script>

<style></style>
