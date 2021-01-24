<template>
  <base-container title="Vuex">
    <p>Counter Value: {{ counterValue }}</p>
    <!-- RENDER Counter -->
    <the-counter></the-counter>
    <!-- RENDER Counter -->
    <favorite-value></favorite-value>
    <!-- UPDATE Counter -->
    <button @click="addOne">(Counter + 1) * 3</button>
    <!-- Update Counter -->
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.commit({
        type: 'increase',
        value: 1
      });
    }
  },
  computed: {
    counterValue() {
      return this.$store.state.counter;
    }
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
