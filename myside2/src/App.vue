<template>
    <div id="app">
        <MyCart :cart="cartList" :title="title"></MyCart>
    </div>

</template>

<script>
    import MyCart from './components/car.vue'

    export default {
        name: 'app',
        data() {
            return {
                title: '购物车',
                cartList: [
//                    {id: 1, title: 'Vue实战开发', price: 188, active: true, count: 1},
//                         {id: 2, title: 'python实战开发', price: 189, active: true, count: 1}
                ]

            }
        },
//        created() {
//            this.$http.get('/api/carList')
//            .then(res => {
//                    this.cartList = res.data.result;
//            }).catch(err => {
//                console.log(err)
//            })
//        },
        async created() {
            console.log('this.cartList',this.cartList)
            try {
                const res = await this.$http.get('/api/carList');
                this.cartList = res.data.result;
                console.log('this.cartList',this.cartList)
            } catch (error) {
                console.log(error)
            }


        },
        components: {
            MyCart
        }
    }
</script>

<style>

</style>
