import Service from "../services/index";

export default {
    FETCH_NEWS(context) {
    Service.fetchNews()
      .then((response) => {
        context.commit("SET_NEWS", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    // context가 commit 기능을 가지고 있어서 바로 {commit} 해도됨
    Service.fetchAsk()
      .then((response) => {
        commit("SET_ASK", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    // console.log("myPage context ----, ",context); // commit,dispatch,getters...
    Service.fetchJobs()
      .then(({ data }) => {
        commit("SET_JOBS", data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, userName) {
    if (userName) {
      Service.fetchUser(userName)
        .then(({ data }) => {
          commit("SET_USER", data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  FETCH_ITEM({ commit }, itemId) {
    Service.fetchItem(itemId)
      .then(({ data }) => {
        commit("SET_ITEM", data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
