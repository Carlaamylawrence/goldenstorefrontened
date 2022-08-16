<template>
  <form>
          <input type="email" v-model="email" class="email" placeholder="example@email.com" required>
          <div>
          <input type="password" v-model="password" placeholder="password" required>
          </div>
        </form>
      <div class="login">
        <button id="login" type="submit" @click.prevent="login()" class="btn btn-primary">Sign in</button>
      </div>
</template>

<script>
export default {
data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
},
};
</script>

<style>

</style>