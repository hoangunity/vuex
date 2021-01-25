<template>
  <button @click="addOne">(Counter + 2) * 3</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    }
  }
};
</script>
