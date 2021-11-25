<template>
  <div class="main_wrapper">
    <DeliveryForm/>
    <DeliveryData/>
  </div>
</template>

<script>
import deliveryForm from '../components/deliveryForm.vue';
export default {
  components: { deliveryForm },

};
</script>

<style lang="scss">
    .main_wrapper{
      display: flex;
      min-height: 100vh;
    }
</style>
