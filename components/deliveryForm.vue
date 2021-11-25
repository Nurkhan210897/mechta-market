<template>
  <div class="delivery-form_wrapper">
    <div class="delivery-form">
      <div class="delivery-form_descr">
        <h3 class="title">Delivery cost</h3>
        <p>Enter name of the city to count delivery cost</p>
      </div>

      <form action="">
        <input
          type="text"
          v-model="searchVal"
          placeholder="Enter name of the city"
        />
        <button type="submit" v-if="!error || !getDeliveries.length" @click.prevent="sendRequest" class="btn btn-blue">
          ENTER
        </button>
        <span class="error-form" v-if="error" @click="searchVal = ''">x</span>
        <span class="success-form" v-if="getDeliveries.length" @click="searchVal = ''">x</span>
      </form>
       <span class="error" v-if="error">We didn’t found such city. Please check spelling</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    deliveryMethods: null,
    searchVal: "",
  }),
  computed: {
    ...mapGetters(["getDeliveries"]),
    error() {
      return this.$store.state.error;
    },
  },
  methods: {
    async sendRequest() {
      this.$store.dispatch("fetchDeliveries", this.searchVal);
    },
  },
};
</script>

<style lang="scss">
.delivery-form_wrapper {
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delivery-form {
  width: 100%;
  max-width: 525px;
  margin: 0 auto;
  &_descr {
    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      color: #283044;
      margin-bottom: 15px;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      color: var(-silver);
    }
  }
  form {
    display: flex;
    align-items: center;
    position: relative;
    margin: 80px 0 15px;
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
</style>
