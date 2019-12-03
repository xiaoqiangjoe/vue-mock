<template>
    <div>
        <h2>{{title}}</h2>
        <table border="1">
            <tr>
                <th>#</th>
                <th>课程</th>
                <th>单价</th>
                <th>数量</th>
                <th>总价</th>
            </tr>
            <tr v-for="(c,index) in cart" :key="c.id">

                <td><input type="checkbox" v-model="c.active"></td>
                <td>{{c.title}}</td>
                <td>{{c.price}}</td>
                <td>
                    <button @click="substract(index)">-</button>
                    {{c.count}}
                    <button @click="add(index)">+</button>
                </td>
                <td>￥{{c.price * c.count}}</td>
            </tr>
            <tr>
                <td></td>
                <!--<td colspan="2">{{ '1/2' }}</td>-->
                <!--用计算属性得到-->
                <td colspan="2">{{activeCount}}/{{ count }}</td>
                <td colspan="2">总价￥{{ totalPrice }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'cart',
        props: ['title', 'cart'],
        methods: {
            remove(i){
                if(window.confirm('确定要删除吗')){
                    this.cart.splice(i)
                }
            },
            substract(i) {
                let count = this.cart[i].count;
                count > 1 ? this.cart[i].count -= 1 :this.remove(i);
            },
            add(i) {
                this.cart[i].count++;
            },
        },
        computed: {
            count() {
                return this.cart.length
            },
            activeCount() {
                return this.cart.filter(v => v.active).length
            },
            totalPrice() {
                let sum = 0;
                this.cart.forEach(c => {
                    if (c.active) {
                        sum += c.price * c.count
                    }
                });
                return sum
            }
        }
    }
</script>

<style scoped>

</style>