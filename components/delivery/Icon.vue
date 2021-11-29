<template>
  <div class="delivery-icon">
    <img src="@/static/images/courier.png" alt="" v-if="type === 'courier'" />
    <img src="@/static/images/pickup.png" alt="" v-if="type === 'pickup'" />
    <img src="@/static/images/post.png" alt="" v-if="type === 'post'" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss">
.delivery-icon {
}
</style>
