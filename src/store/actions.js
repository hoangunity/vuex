export default {
  approveAuthentication(context) {
    setTimeout(function() {
      context.commit('setAuthentication', { isAuth: true });
    }, 1500);
  },
  denyAuthentication(context) {
    setTimeout(function() {
      context.commit('setAuthentication', { isAuth: false });
    }, 1500);
  }
};
