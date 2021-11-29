<template>
  <div class="main-wrapper">
    <div class="delivery-wrapper">
      <LayoutHeader />
      <div class="delivery container">
        <DeliveryDescription />
        <DeliverySearch />
        <DeliveryMostPopularCities />
      </div>
      <LayoutFooter v-if="!$isMobile()" />
    </div>
    <DeliveryResults />
    <LayoutFooter v-if="$isMobile()" />
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
.delivery {
  margin-bottom: 42px;
}

@media only screen and (max-width: 576px) {
  .delivery {
    margin: 50px 0 0;
    &_descr {
      .title {
        font-size: 36px;
        line-height: 42px;
      }
      p {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .main-wrapper {
    flex-direction: column;
  }
}
</style>
