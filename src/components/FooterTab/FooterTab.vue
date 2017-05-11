<template>
<div class="footer">
  	<footer class="fixBottomBox">
        <ul>
           
            <router-link tag="li" to="/home" class="tabItem">
            	<a href="javascript:;" class="tab-item-link">
                    <img src="../../assets/images/a-home.png" alt="" class="tab-item-icon">
                </a>
            </router-link>
            <router-link tag="li" to="/classification" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img src="../../assets/images/n-catergry.png" alt="" class="tab-item-icon">
                </a>
            </router-link>
            <router-link tag="li" to="/shoppingcart" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img src="../../assets/images/n-cart.png" alt="" class="tab-item-icon">
                </a>
            </router-link>
        </ul>
    </footer>
  </div>
    <!--<div class="footer-tab">
        <router-link active-class='menu-active' :to="menu.path" tag="div" v-for="menu in menuData">
            <i :class="menu.code"></i>
            <a>{{menu.text}}</a>
        </router-link>
    </div>-->
</template>

<script>
import Vue from 'vue';
const menuData = [{
    text: '首页',
    path: '/home',
    code: 'home'
}, {
    text: '分类',
    path: '/classification',
    code: 'classification'
}, {
    text: '车',
    path: '/shoppingcart',
    code: 'shoppingcart'
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
    mounted() {
    }
};
</script>

<style lang="scss" socped>
.footer-tab {
    background-color: #e3e1e1;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    text-align: center;
    display: flex;
    div {
        display: block;
        flex: 1;
        height: 6rem;
        i {
            display: block;
            width: 60px;
            height: 60px;
            margin: 1px auto 5px;
            background-color: #000;
        }
        i.home {
            background: url(../../assets/icons.png) -45px -66px no-repeat;
        }
        i.classification {
            background: url(../../assets/icons.png) -658px -851px no-repeat;
        }
        i.shoppingcart {
            background: url(../../assets/icons.png) -530px -459px no-repeat;
        }
    }
    .menu-active {
        background-color: #a9a9dc;
    }
}

.fixBottomBox {
    width: 100%;
    height: 50px;
    box-shadow: 0 -2px 10px #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
}

.fixBottomBox ul {
    display: flex;
    justify-content: space-around;
}

.fixBottomBox .tabItem {
    width: 18%;
    height: 100%;
    text-align: center;
}

.tabItem .tab-item-link {
    display: inline-flex;
    width: 70px;
    height: 50px;
}

.tabItem .tab-item-link .tab-item-icon {
    display: inline-flex;
    width: 100%;
    height: auto;
}

</style>