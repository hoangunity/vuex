<template>
  <base-container title="Vuex" v-if="isAuth">
    <!-- RENDER Counter -->
    <the-counter></the-counter>
    <!-- RENDER Counter -->
    <favorite-value></favorite-value>
    <!-- UPDATE Counter -->
    <button @click="addOne">(Counter + 1) * 3</button>
    <!-- Update Counter -->
    <change-counter></change-counter>
  </base-container>
  <!-- Authentication -->
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 1
      });
    }
  },
  computed: {
    // isAuthenticated() {
    //   return this.$store.state.isAuthenticated;
    // },
    ...mapGetters({
      isAuth: 'userIsAuthenticated'
    })
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
