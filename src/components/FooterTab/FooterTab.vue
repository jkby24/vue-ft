<template>
    <div class="footer-tab">
        <router-link active-class='menu-active' :to="menu.path" tag="div" v-for="menu in menuData">
            <i :class="menu.code"></i>
            <a>{{menu.text}}</a>
        </router-link>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tabbar, TabItem } from 'mint-ui';
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
    const menuData = [{
        text: '首页',
        path: '/index',
        code:'index'
    }, {
        text: '分类',
        path: '/classification',
        code:'classification'
    },{
        text: '购物车',
        path: '/shoppingcart',
        code:'shoppingcart'
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
        background-color: #e3e1e1;
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
            height: 6rem;
            i{  
                display:block;
                width: 60px;
                height: 60px;
                margin: 1px auto 5px;
                background-color: #000;
            }
            i.index{
                background: url(../../assets/icons.png) -45px -66px no-repeat;
            }
            i.classification{
                background: url(../../assets/icons.png) -658px -851px no-repeat;
            }
            i.shoppingcart{
                background: url(../../assets/icons.png) -530px -459px no-repeat;
            }
        }
        .menu-active{
            background-color: #a9a9dc;
        }
    }
</style>