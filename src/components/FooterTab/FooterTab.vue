<template>
    <div class="footer-tab">
        <router-link active-class='menu-active' :to="menu.path" tag="div" v-for="menu in menuData"><a>{{menu.text}}</a></router-link>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tabbar, TabItem } from 'mint-ui';
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
    const menuData = [{
        text: '首页',
        path: '/index'
    }, {
        text: '分类',
        path: '/classification'
    },{
        text: '购物车',
        path: '/shoppingcart'
    }];

    export default {
        data() {
            return {
                menuData
            };
        },
        methods: {
            
        },
        
        watch: {
        },
        mounted(){
        }
    };
</script>

<style lang="scss" socped>
    .footer-tab{
        background-color: #efefef;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        z-index: 1;
        text-align: center;
        display: flex;
        div{
            display: block;
            flex:1;
            height: 30px;
        }
        .menu-active{
            background-color: #a9a9dc;
        }
    }
</style>