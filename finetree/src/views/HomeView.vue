<template>
  <div>
    Home <br/>
    <p v-for="item in this.$store.state.news">
        <a v-bind:href="item.url">
            {{ item.title }}
        </a>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
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
