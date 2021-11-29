<template>
  <div class="most-popular">
    <p class="small-title">Most popular cities</p>
    <div class="most-popular_list">
      <ul>
        <li v-for="(city, index) in cicies" :key="index">
          <nuxt-link to="/">{{ city }}</nuxt-link>
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
.most-popular {
  margin-top: 42px;
  max-height: 255px;
  &_list {
    ul {
      columns: 2;
      li {
        margin-bottom: 34px;
        a {
          padding: 0 15px 14px;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 23px;
          color: rgba(40, 48, 68, 0.5);
          font-family: "Roboto", sans-serif;
          text-decoration: none;
          border-bottom: 1px solid #e9f0eb;
          &:hover {
            color: #000;
            border-color: #000;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  .most-popular {
    max-height: fit-content;
    .small-title {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 19px;
    }
    ul {
      li {
        margin-bottom: 20px;
        a {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
