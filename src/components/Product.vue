<template>
  <div>
    <div class="card-body">
    <h5 class="card-title">{{product.nom}}</h5>
    <p class="card-text">{{product.prix}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</template>

<script>
export default {
    props:['product']
}
</script>

<style>

</style>