import http from "@/api/http";

export default {
  fetchNews() {
    return http.get(`news/1.json`);
  },

  fetchAsk() {
    return http.get(`ask/1.json`);
  },

  fetchJobs() {
    return http.get(`jobs/1.json`);
  },

  // HOC
  fetchList(pageName) {
    return http.get(`${pageName}/1.json`);
  },

  fetchUser(username) {
    return http.get(`user/${username}.json`);
  },

  fetchItem(id) {
    return http.get(`item/${id}.json`);
  },
};
