<template>
  <div class="delivery-data">
    <Banner v-if="!loading && !getDeliveryTypes.length" />
    <Loader v-if="loading && !error" />
    <DeliveryCard
      v-for="(item, index) in getDeliveryTypes"
      :key="index"
      @click.native="chooseType(item)"
      :class="{ selected: selectedType === item.type }"
      :selectedType="selectedType"
      v-if="getDeliveryTypes.length"
      :deliveryData="item"
    />
    <ErrorForm errorText="We didn’t found such city. Please check spelling" />

    <!-- <span class="error" v-if="error"
      >We didn’t found such city. Please check spelling</span
    > -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    selectedType: "",
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
    chooseType(item) {
      if (item.available) {
        this.selectedType = item.type;
      }
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
