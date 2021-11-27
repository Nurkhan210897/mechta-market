<template>
  <div class="delivery-card_wrapper">
    <div
      v-for="(item, index) in deliveryData"
      :key="index"
      class="delivery-card"
      :class="{ 'not-available': !item.available }"
      @click="checkDeliveryType(item.type)"
    >
      <div>
        <p class="delivery-card_type">{{ item.type }}</p>
        <p class="delivery-card_price">{{ item.price }}$</p>
      </div>
      <DeliveryIcon :type="item.type" />
      <div class="check" v-if="item.type == checkedDeliveryType"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    deliveryData: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    checkedDeliveryType: "",
  }),
  methods: {
    checkDeliveryType(type) {
      console.log(type);
      this.checkedDeliveryType = type;
    },
  },
};
</script>

<style lang="scss">
.delivery-card_wrapper {
  width: 100%;
  max-width: 525px;
}
.delivery-card {
  background: #ffffff;
  border: 1px solid #e9f0eb;
  box-sizing: border-box;
  border-radius: 22px;
  padding: 30px 38px 18px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0;
  }
  &_type {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #283044;
    margin-bottom: 90px;
  }
  &_price {
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 59px;
    color: #78a1bb;
  }
  &.not-available {
    opacity: 0.5;
  }
}
.check {
  display: block;
  width: 72px;
  margin: -30px -38px -50px;
  height: 100%;
  background: linear-gradient(310.04deg, #65b3e4 23.89%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 20px rgba(120, 161, 187, 0.3));
  border-radius: 22px;
}
</style>
