<template>
  <div class="delivery_descr">
    <h3 class="title">Delivery cost</h3>
    <p>Enter name of the city to count delivery cost</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.delivery_descr {
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
@media only screen and (max-width: 576px) {
  .delivery_descr {
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
</style>
