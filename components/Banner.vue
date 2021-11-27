<template>
  <div class="banner">
    <span class="logo-text">Fast Service </span>
    <img src="@/static/images/free-shipping.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner {
  position: relative;
  .logo-text {
    width: 100%;
    max-width: 323px;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 112px;
    color: rgba(40, 48, 68, 0.1);
    position: absolute;
    right: -120px;
    top: -100px;
  }
  img {
    width: 100%;
    max-width: 550px;
  }
}

@media only screen and (max-width: 768px) {
  .banner {
    img {
      width: 100%;
      max-width: 180px;
    }
    .logo-text {
      top: -40px;
      font-size: 36px;
      line-height: 42px;
    }
  }
}
</style>
