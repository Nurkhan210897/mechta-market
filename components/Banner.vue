<template>
  <div class="loading">
    <span class="logo-data">Fast Service </span>
    <img src="@/static/images/free-shipping.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loading {
  position: relative;
  .logo-data {
    width: 100%;
    max-width: 323px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 112px;
    color: rgba(40, 48, 68, 0.1);
    position: absolute;
    right: -120px;
    top: -100px;
  }
}
</style>
