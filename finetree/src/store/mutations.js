export default {
    
  SET_HOME(state, data) {
    // actions 에서 가져온거 어떻게 넣지
    state.news = data;
  },
  SET_ITEM(state, data) {
    state.items = data;
  },
  SET_MYPAGE(state, data) {
    state.myPages = data;
  },
};
