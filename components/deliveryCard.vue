<template>
  <div class="delivery-card" :class="{ 'not-available': !deliveryData.available }">
    <div class="delivery-card_body">
      <p class="delivery-card_type">{{ deliveryData.type }}</p>
      <p class="delivery-card_price">{{ deliveryData.price }}$</p>
    </div>
    <DeliveryIcon :type="deliveryData.type" />
    <div class="check" v-if="selectedType === deliveryData.type"></div>
  </div>
</template>

<script>
export default {
  props: {
    deliveryData: {
      type: Object,
      default: () => {},
    },
    selectedType: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss">
.delivery-card {
  width: 100%;
  max-width: 525px;
  background: #ffffff;
  border: 1px solid #e9f0eb;
  box-sizing: border-box;
  border-radius: 22px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0;
  }
  &_body {
    padding: 30px 38px 18px;
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
    pointer-events: none;
  }
}
.check {
  display: block;
  width: 72px;
  height: 100%;
  background: linear-gradient(310.04deg, #65b3e4 23.89%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 20px rgba(120, 161, 187, 0.3));
  border-radius: 22px;
}
</style>
