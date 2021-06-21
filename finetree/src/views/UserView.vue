<template>
  <div>
    <div>User</div>
    <p>name : {{ userInfo.id }}</p>
    <p>Karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      // 축약
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>