<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col" v-for="item in productsData" :key="item.id">
                  <div class="card" style="width: 18rem;">
                      <img :src="item.img" class="card-img-top" alt="...">
                      <div class="card-body">
                        <p class="card-text">{{ item.make }}</p>
                        <p class="card-text">{{ item.specs }}</p>
                        <p class="card-text">{{ item.Amount }}</p>
                      </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
     computed:{
      productsData(){
        return this.$store.state.productsData
      }
     },
     mounted(){
      this.$store.dispatch('fetchData')
     }
  }
</script>

<style scoped>

</style>