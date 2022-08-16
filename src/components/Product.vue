<template>
 <div v-if="product" id="container">
    <div v-for="product in product" v-bind:key="product.id" class="item">
        <img class="image" :src="product.img" alt="" />
    </div>
    </div>
</template>

<script>
export default {
data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch("https://eomp.herokuapp.com/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.product = data));

    console.log(this.product);
  },
}
</script>

<style>

</style>