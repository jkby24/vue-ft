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
            height: 70px;
            i{  
                display:block;
                width: 40px;
                height: 41px;
                margin: 0px auto 5px;
            }
            i.index{
                background: url(../../assets/icons.png) -30px -44px no-repeat;
            }
            i.classification{
                background: url(../../assets/icons.png) -430px -566px no-repeat;
            }
            i.shoppingcart{
                background: url(../../assets/icons.png) -353px -304px no-repeat;
            }
        }
        .menu-active{
            background-color: #a9a9dc;
        }
    }
</style>