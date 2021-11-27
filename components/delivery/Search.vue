<template>
  <div class="search-form">
    <form action="" @submit.prevent="sendDeliveryTypes">
      <input type="text" v-model="searchVal" placeholder="Enter name of the city" />
      <button
        type="submit"
        v-if="!error && !getDeliveryTypes.length"
        class="btn btn-blue"
      >
        ENTER
      </button>
      <span class="error-form" v-if="error" @click="clear">x</span>
      <span class="success-form" v-if="getDeliveryTypes.length" @click="clear">x</span>
    </form>
    <span class="error" v-if="error"
      >We didn’t found such city. Please check spelling</span
    >
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

<style lang="scss" scoped>
.search-form {
  margin: 80px 0 42px;
  form {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    position: relative;
    input {
      background: #ffffff;
      border: 1px solid #e9f0eb;
      box-sizing: border-box;
      border-radius: 50px;
      height: 63px;
      width: 100%;
      padding: 16px 184px 16px 36px;
      font-size: 24px;
      line-height: 28px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #d9e4dc;
      }
    }
    .btn {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}

@media only screen and (max-width: 576px) {
  .search-form {
    margin: 40px 0;
    form {
      input {
        padding: 15px 44px 15px 20px;
        font-size: 16px;
        &::placeholder {
          font-size: 16px;
        }
      }
      .btn {
        font-size: 16px;
        padding: 0 14px;
        height: 100%;
      }
    }
  }
}
</style>
