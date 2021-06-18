<template>
  <div>
    MyPage<br />
    <div v-for="item in fetchedMyPage">{{ item.title }}</div>
  </div>
</template>

<script>
import Service from "../services/index";
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {

    // #방법4 getters의 fetchedMyPage를 바로 사용하고 싶다면 객체가 아니라 배열로 표기
    ...mapGetters([
        'fetchedMyPage'
    ])
    // #방법3 getters 사용
    // ...mapGetters({
    //      myPages :'fetchedMyPage' // 상당 v-for 에 myPages 입력
    // }),
    // #방법2 mapState 사용
    //   ...mapState({
    //       myPages: state => state.myPages  // vuex bindings 해서 mapState안에 vuex의 myPages를 담을수있다.
    //   }),
    // #방법1
    //   myPage() {
    //       return this.$store.state;
    //   }
  },
  data() {
    return {
    //   items: [],
    };
  },
  created() {
    this.$store.dispatch('FETCH_MYPAGES');

    // Service.fetchMyPageList()
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