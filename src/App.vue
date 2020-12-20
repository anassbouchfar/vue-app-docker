<template>
  <div id="app">
    <div id="nav" >
      <router-link to="/">ALL Products</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
export default {
  
}
</script>

<style>
#nav{
  display: none;
}
</style>
