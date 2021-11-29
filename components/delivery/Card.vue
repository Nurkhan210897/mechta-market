<template>
  <div class="delivery-card" :class="{ 'not-available': !deliveryData.available }">
    <div class="delivery-card_body">
      <div class="delivery-card_text">
        <p class="delivery-card_type">{{ deliveryData.type }}</p>
        <p class="delivery-card_price">{{ deliveryData.price }}$</p>
      </div>
      <DeliveryIcon :type="deliveryData.type" />
    </div>
    <div class="check" v-if="selectedType === deliveryData.type">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="check"
        class="svg-inline--fa fa-check"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z"
        ></path>
      </svg>
    </div>
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
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
  &_body {
    display: flex;
    flex: 1 1 70%;
    padding: 30px 38px 18px;
    justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 100%;
  background: linear-gradient(310.04deg, #65b3e4 23.89%, rgba(255, 255, 255, 0) 100%);
  filter: drop-shadow(0px 0px 20px rgba(120, 161, 187, 0.3));
  border-radius: 0px 22px 22px 0px;
  svg {
    width: 30px;
    color: #fff;
  }
}

@media only screen and (max-width: 768px) {
  .delivery-card {
    &_type {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 60px;
    }
    &_price {
      font-size: 24px;
      line-height: 28px;
    }
  }
}
.check {
  min-height: 210px;
}
</style>
