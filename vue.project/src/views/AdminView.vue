<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col">
                      <table class="table">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in productsData" :key="item.id">
                                    <td>{{ item.make }}</td>
                                    <td>{{ item.Amount }}</td>
                                    <td><img :src="item.img" alt="" style="width: 10rem"></td>
                                </tr>
                            </tbody>
                      </table>
              
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