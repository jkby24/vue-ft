<template>
    <div>
        <h1>{{ msg }}商品ID {{ $route.params.id }}</h1>
        <router-link to="/goods/3344234">商品</router-link>
        <router-link to="/goods/3344234/detail">详情</router-link>
        <transition 
             enter-active-class="animated fadeIn">
                <router-view></router-view>
            </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Goods'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
