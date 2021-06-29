import Service from "../services/index";

export default {
  async FETCH_NEWS(context) {
    const response = await Service.fetchNews();
    context.commit("SET_NEWS", response.data);
    return response;
  },
  async FETCH_ASK({ commit }) {
    // context가 commit 기능을 가지고 있어서 바로 {commit} 해도됨
    const response = Service.fetchAsk();
    commit("SET_ASK", response.data);
    return response;
  },
  async FETCH_JOBS({ commit }) {
    const {data} = Service.fetchJobs();
    commit("SET_JOBS", data);
    return response;
  },
  FETCH_USER({ commit }, userName) {
    if (userName) {
      return Service.fetchUser(userName)
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
    return Service.fetchItem(itemId)
      .then(({ data }) => {
        commit("SET_ITEM", data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    return Service.fetchList(pageName)
      .then((response) => {
        commit("SET_LIST", response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
