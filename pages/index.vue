<template>
  <div>
    <form action="">
      <input type="text" v-model="searchVal" />
      <input type="submit" @click.prevent="sendRequest" />
      <span v-if="searchVal.length" @click="searchVal = ''">x</span>
    </form>
    <pre>
      {{ deliveryMethods }}
    </pre>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    deliveryMethods: null,
    searchVal: "",
    error: null
  }),
  methods: {
    async sendRequest() {
      const url = `https://qvjgl.mocklab.io/delivery/check?search=${this.searchVal}`;
      try {
        let response = await fetch(url, {
          method: "GET",
        });
        this.error = null
        this.deliveryMethods = await response.json();
      } catch (error) {
        this.deliveryMethods = null
        this.error = 'We didn’t found such city. Please check spelling'
      }
    },
  },
};
</script>
