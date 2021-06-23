<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import EventBus from "../utils/bus";
export default {
  components: { ListItem },
  mounted() {
    EventBus.$emit("end:spinner");
  },
};
</script>

<style>
</style>