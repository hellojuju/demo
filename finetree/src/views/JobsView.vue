<template>
  <div>
    <div>Job</div>
  <item-list></item-list>
  </div>
</template>

<script>
import ItemList from '../components/ListItem.vue';

export default {
  name: 'JobsView',
  components: {
    ItemList,
  },
};
</script>

<style scoped>

</style>