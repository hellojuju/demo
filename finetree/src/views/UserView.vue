<template>
  <div>
    <div>User</div>
    <user-profile></user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  name: UserView,
  components: {
    UserProfile,
  },
//   computed: {
//     userInfo() {
//       // 축약
//       return this.$store.state.user;
//     },
//   },
  created() {
    // const userName = this.$route.params.id;
    // this.$store.dispatch("FETCH_USER", userName);
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>