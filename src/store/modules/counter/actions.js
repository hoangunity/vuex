export default {
  increment(context) {
    setTimeout(function() {
      // context.commit('increment')
      context.commit({ type: 'increment' });
    }, 2000);
  },
  increase(context, payload) {
    // console.log(context);
    context.commit('increase', payload); // payload: object
  }
};
