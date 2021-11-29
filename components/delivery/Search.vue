<template>
  <div class="search-form">
    <form action="" @submit.prevent="sendDeliveryTypes">
      <input type="text" v-model="city" placeholder="Enter name of the city" />
      <button
        type="submit"
        v-if="!error && !getDeliveryTypes.length"
        class="btn btn-blue"
      >
        ENTER
      </button>
      <span class="error-form" v-if="error" @click="clear"
        ><i class="fas fa-times"></i
      ></span>
      <span class="success-form" v-if="getDeliveryTypes.length" @click="clear"
        ><i class="fas fa-times"></i
      ></span>
    </form>
    <ErrorForm errorText="We didn’t found such city. Please check spelling" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    city: "",
  }),
  computed: {
    ...mapGetters(["getDeliveryTypes"]),
    error() {
      return this.$store.state.error;
    },
  },
  methods: {
    ...mapMutations(["clearDeliveryTypes"]),
    ...mapActions({
      fetchDeliveryTypes: "fetchDeliveryTypes",
    }),
    sendDeliveryTypes() {
      if (this.city.length) {
        this.fetchDeliveryTypes(this.city);
      }
    },
    clear() {
      this.clearDeliveryTypes();
      this.city = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  margin: 80px 0 15px;
  form {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #e9f0eb;
    margin-bottom: 15px;
    border-radius: 50px;
    input {
      background: #ffffff;
      box-sizing: border-box;
      border: none;
      height: 63px;
      width: 100%;
      padding: 16px 184px 16px 36px;
      font-size: 24px;
      line-height: 28px;
      border-radius: 50px;
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
    &:focus {
      border-color: #000;
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
