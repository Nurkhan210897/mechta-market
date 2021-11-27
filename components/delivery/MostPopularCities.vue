<template>
  <div>
    <p class="small-title">Most popular cities</p>
    <div class="popular-list">
      <ul>
        <li v-for="(city, index) in cicies" :key="index">
          <p>{{ city }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cicies: [
      "Nur - Sultan",
      "Almaty",
      "Shymkent",
      "Atyrau",
      "Aktau",
      "Zhana Turmis",
      "Karaganda",
      "Kentau",
      "Aitei",
      "Pavlodar",
    ],
  }),
};
</script>

<style lang="scss">
.small-title {
  margin-bottom: 42px;
}
.popular-list {
  padding: 0 15px;
  max-height: 255px;
  ul {
    columns: 2;
    li {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      color: rgba(40, 48, 68, 0.5);
      margin-bottom: 34px;
    }
  }
}
</style>
