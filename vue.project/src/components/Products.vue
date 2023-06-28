<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in data" :key="item.id">
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
        data() {
        return {
            data: []
        }
        },
        methods: {
            async fetchData() {
                const res = await fetch("https://github.com/Ziaaaaaaaaaaaa/JSON-data/data.json");
                let parsedData = await res.json()
                this.data = parsedData.products
            }
        },
        mounted() {
            this.fetchData()
        }
    }
</script>

<style scoped>

</style>