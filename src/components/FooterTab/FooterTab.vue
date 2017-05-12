<template>
    <div class="footer">
        <footer class="fixBottomBox">
            <ul>
                <router-link active-class='menu-active' tag="li" :to="menu.path" class="tabItem" v-for="menu in menuData">
                    <i :class="menu.code"></i>
                    <a>{{menu.text}}</a>
                </router-link>
            </ul>
        </footer>
    </div>
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
            // background: url(../../assets/icons.png) -45px -66px no-repeat;
        }
        i.classification {
            // background: url(../../assets/icons.png) -658px -851px no-repeat;
        }
        i.shoppingcart {
            // background: url(../../assets/icons.png) -530px -459px no-repeat;
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
    ul {
        display: flex;
        justify-content: space-around;
    }
    .tabItem {
        width: 18%;
        height: 100%;
        text-align: center;
        i {
            display: block;
            width: 35px;
            height: 30px;
            margin: 1px auto 1px;
            background-color: #000;
        }
        i.home {
            background: url(../../assets/images/footbar-home.png) 0 0 no-repeat;
        }
        i.classification {
            background: url(../../assets/images/footbar-classification.png) 0 0 no-repeat;
        }
        i.shoppingcart {
            background: url(../../assets/images/footbar-shoppingcart.png) 0 0 no-repeat;
        }
        a {
            color: #5d5f6a;
        }
    }
    .menu-active {
        i.home {
            background: url(../../assets/images/footbar-home-active.png) 0 0 no-repeat;
        }
        i.classification {
            background: url(../../assets/images/footbar-classification-active.png) 0 0 no-repeat;
        }
        i.shoppingcart {
            background: url(../../assets/images/footbar-shoppingcart-active.png) 0 0 no-repeat;
        }
        a {
            color: #ec6149;
        }
    }
}
</style>