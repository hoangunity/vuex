import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
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
  },
  getters: {
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
  }
};

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isAuthenticated: false
    };
  },
  mutations: {
    setAuthentication(state, payload) {
      state.isAuthenticated = payload.isAuth;
    }
  },
  actions: {
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
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isAuthenticated;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
