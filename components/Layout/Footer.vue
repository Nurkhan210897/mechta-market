<template>
  <div class="container">
    <footer>
      <p class="silver-text">All rights reservedFast service 2021</p>
      <ul>
        <li>
          <img src="@/static/icons/visa.svg" alt="" />
        </li>
        <li>
          <img src="@/static/icons/mastercard.svg" alt="" />
        </li>
        <li>
          <img src="@/static/icons/maestro.svg" alt="" />
        </li>
        <li>
          <img src="@/static/icons/processing.svg" alt="" />
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  footer {
    padding: 40px 0 25px;
    flex-wrap: wrap-reverse;
    p {
      margin-top: 20px;
    }
  }
}
</style>
