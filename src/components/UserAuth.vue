<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-else>Logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions({
      login: 'approveAuthentication',
      logout: 'denyAuthentication'
    })
  },
  computed: {
    ...mapGetters({
      isAuth: 'userIsAuthenticated',
      testAuth: 'testAuth'
    })
  }
};
</script>
