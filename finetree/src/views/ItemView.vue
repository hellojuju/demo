<template>
  <div>
    Items <br />
    <p v-for="job in this.$store.state.items">
        <a :href="job.url">
            {{ job.title }}
        </a>
        <small>{{ job.time_ago }},  {{ job.domain }}</small>
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
      
    this.$store.dispatch('FETCH_ITEMS');
    // Service.fetchItemList()
    //   .then((response) => {
    //     console.log(response);
    //     vm.items = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style>
</style>