<template>
  <form >
           <input type="name" v-model="fullname" class="name" placeholder="Katy Applesauce" required>
          <input type="email" v-model="email" class="email" placeholder="example@email.com" required>
          <div>
          <input type="password" v-model="password" placeholder="password" required>
          </div>
          <div>
            <input type="phone_number" v-model="phone" class="phone_number" placeholder="+27 123 4567" required>
          </div>
        </form>
      <div class="register">
        <button type="submit" @click.prevent="register()" >Sign up</button>
      </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      phone: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        phone: this.phone_number,
      });
    },
  },
}
</script>

<style>

</style>