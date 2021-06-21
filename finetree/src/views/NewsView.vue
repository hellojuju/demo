<template>
  <div>
    <div>News</div>
  <item-list></item-list>
  </div>
</template>

<script>
import ItemList from '../components/ListItem.vue';

export default {
  name: 'NewsView',
  components: {
    ItemList,
  },
};
</script>

<style scoped>

</style>