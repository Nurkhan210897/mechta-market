<template>
  <div class="delivery-data">
    <Banner v-if="!loading && !getDeliveryTypes.length" />
    <Loader v-if="loading && !error" />
    <DeliveryCard v-if="getDeliveryTypes.length" :deliveryData="getDeliveryTypes" />
    <span class="error" v-if="error"
      >We didn’t found such city. Please check spelling</span
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    type: "",
  }),
  computed: {
    ...mapGetters(["getDeliveryTypes"]),
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    },
  },
  methods: {
    addType(type) {
      console.log(type);
    },
  },
};
</script>

<style lang="scss">
.delivery-data {
  position: relative;
  background: #f7f7f7;
  border-radius: 40px 0px 0px 40px;
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 138px 0;
}
@media only screen and (max-width: 768px) {
  .delivery-data {
    border-radius: 40px 40px 0px 0px;
  }
}
</style>
