import Service from "../services/index";

export default {

  FETCH_NEWS(context) {
    Service.fetchHomeList()
      .then((response) => {
        context.commit("SET_HOME", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEMS({ commit }) {
    // context가 commit 기능을 가지고 있어서 바로 {commit} 해도됨
    Service.fetchItemList()
      .then((response) => {
        commit("SET_ITEM", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_MYPAGES({ commit }) {
    // console.log("myPage context ----, ",context); // commit,dispatch,getters...
    Service.fetchMyPageList()
      .then(({ data }) => {
        commit("SET_MYPAGE", data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
