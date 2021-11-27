<template>
  <div class="main-wrapper">
    <div class="delivery-wrapper">
      <div class="container">
        <div class="logo">
          <img src="@/static/icons/logo.svg" alt="" />
          <span>FastService</span>
        </div>
      </div>
      <Delivery />
      <div class="container">
        <Footer v-if="!$isMobile()" />
      </div>
    </div>
    <DeliveryData />
    <Footer v-if="$isMobile()" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  img {
    margin-right: 18px;
  }
  span {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #283044;
    font-family: "Roboto", sans-serif;
  }
}
.main-wrapper {
  display: flex;
  min-height: 100vh;
  .delivery-wrapper {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0 28px;
  }
}
@media only screen and (max-width: 768px) {
  .main-wrapper {
    flex-direction: column;
  }
}
</style>
