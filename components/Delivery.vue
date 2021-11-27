<template>
  <div class="delivery-form_wrapper">
    <div class="delivery-form container">
      <div class="delivery-form_descr">
        <h3 class="title">Delivery cost</h3>
        <p>Enter name of the city to count delivery cost</p>
      </div>
      <DeliverySearch />
      <DeliveryMostPopularCities />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    deliveryMethods: null,
    searchVal: "",
  }),
  computed: {
    ...mapGetters(["getDeliveryTypes"]),
    error() {
      return this.$store.state.error;
    },
    isValid() {
      if (this.getDeliveryTypes.length && !this.error) {
        return true;
      }
    },
    Valid() {},
  },
  methods: {
    ...mapMutations(["clearDeliveryTypes"]),
    ...mapActions({
      fetchDeliveryTypes: "fetchDeliveryTypes",
    }),
    sendDeliveryTypes() {
      if (this.searchVal.length) {
        this.fetchDeliveryTypes(this.searchVal);
      }
    },
    clear() {
      this.clearDeliveryTypes();
      this.searchVal = "";
    },
  },
};
</script>

<style lang="scss">
.delivery-form {
  margin-bottom: 42px;
  &_descr {
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      color: #283044;
      font-family: "Roboto", sans-serif;
      margin-bottom: 15px;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      color: rgba(40, 48, 68, 0.5);
    }
  }
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      margin-right: 10px;
    }
  }
}

@media only screen and (max-width: 576px) {
  .delivery-form_wrapper {
    padding: 0 25px;
  }
}
</style>
