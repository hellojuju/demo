<template>
  <div>
    <div>Ask</div>
  <item-list></item-list>
  </div>
</template>

<script>
import ItemList from '../components/ListItem.vue';

export default {
  name: 'AskView',
  components: {
    ItemList,
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
};
</script>

<style scoped>

</style>