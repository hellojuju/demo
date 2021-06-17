<template>
  <div>Home</div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    var vm = this;
    fetchNewsList()
      .then((response) => {
        console.log(response);
        vm.users = response.datal;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
