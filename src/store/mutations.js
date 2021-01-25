export default {
  setAuthentication(state, payload) {
    state.isAuthenticated = payload.isAuth;
  }
};
