<template>
  <div>
    Items <br />
    <div v-for="item in this.$store.state.items">{{ item.title }}</div>
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