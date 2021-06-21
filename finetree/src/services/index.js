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

  fetchUser(id) {
    return http.get(`user/${id}.json`);
  },

  fetchItem(id) {
    return http.get(`item/${id}.json`);
  },
};
