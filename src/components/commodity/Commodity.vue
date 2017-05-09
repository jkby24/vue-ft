<template>
    <div>
        <back :back-router="backRouter" :title="$route.params.id">返回</back>
        <router-link to="/commodity/3344234">商品</router-link>
        <router-link to="/commodity/3344234/detail">详情</router-link>
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
            msg: 'Commodity',
            backRouter:''
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.backRouter = from.fullPath;
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
