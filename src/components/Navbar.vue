<template>
  <div id="nav-links">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Sign up</router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style>
#nav-links{
    display:flex;
    justify-content: space-evenly;
    text-decoration: none;
}
</style>