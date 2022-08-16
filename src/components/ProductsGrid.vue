<template>
  <div class="container">
    <div v-for="product in products" v-bind:key="product.id" class="item">
    <img v-bind:src="product.img"/>
    <p>{{product.title}}</p>
    </div>
    </div>
</template>

<script>
export default {
data() {
    return {
      products: null,
    };
  },
  mounted() {
    fetch("https://goldenxc.herokuapp.com/products", {
    })
      .then((res) => res.json())
      .then((data) => (this.products = data), console.log(this.products));
  },
};

</script>

<style>

</style>