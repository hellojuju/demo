<template>
  <div>
    Home <br />
    <div v-for="item in this.$store.state.news">{{ item.title }}</div>
  </div>
</template>

<script>
import Service from "../services/index";

export default {
  data() {
    return {
    };
  },
  created() {

    this.$store.dispatch('FETCH_NEWS');
    // Service.fetchHomeList()
    //   .then((response) => {
    //     console.log(response);
    //     this.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
