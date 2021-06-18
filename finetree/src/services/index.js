import http from "@/api/http";

export default {
  fetchHomeList() {
    return http.get(`news/1.json`);
  },

  fetchItemList() {
    return http.get(`jobs/1.json`);
  },

  fetchMyPageList() {
    return http.get(`news/1.json`);
  },
};
