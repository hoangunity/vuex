<template>
  <button @click="inc">(Counter + 2) * 3</button>
  <button @click="increase({ value: 10 })">(Counter + 10) * 3</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increment', 'increase'])
    ...mapActions({
      inc: 'increment',
      increase: 'increase'
    })
  }
};
</script>
