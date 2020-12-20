<template>
<div>
  <h1>List of Products</h1>
    <div :key="product.id" v-for="product in Products"  class="card" style="width: 18rem;">
        <Product :product="product"/>
    </div>

</div>
</template>

<script>
import Product from "./Product"
import axios from "axios"

export default {
    name:"Products",
    components:{
        Product
    },
    data() {
        return {
            Products : []
        }
    },
    created(){
            this.getProducts()
        },
    methods:{
          getProducts(){
            axios.get("http://localhost:9000/Products")
                 .then(res => this.Products=res.data)
                 .catch(err=>console.log(err))
        }
    }

}
</script>

<style>
    .card{
        display: inline-block;
        margin: 16px;
    }
    h1{
        text-align: center;
        margin: 10px;
    }
</style>