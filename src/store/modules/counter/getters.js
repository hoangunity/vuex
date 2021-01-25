export default {
  // testAuth(state, getters, rootState, rootGetters) {}
  testAuth(state) {
    return state.isAuthenticated;
  },
  finalCounter(state) {
    // getter(state, otherGetters)
    return state.counter * 3;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) return 0;
    if (finalCounter > 100) return 100;
    return finalCounter;
  }
};
