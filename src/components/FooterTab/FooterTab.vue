<template>
    <div class="footer">
        <ul>
            <li v-for="menu in menuData">
                    <router-link active-class="on" tag="a" :to="menu.path" :class="menu.code">
                         <div class="nav">
                            <div class="ih ispr"  :class="menu.classCode"></div>
                            <p>{{menu.text}}</p>
                        </div>
                    </router-link>
                </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
const menuData = [{
    text: '首页',
    path: '/home',
    code: 'home',
    classCode:'ih'
}, {
    text: '分类',
    path: '/classification',
    code: 'classification',
    classCode:'ic'
}, {
    text: '车',
    path: '/shoppingcart',
    code: 'shoppingcart',
    classCode:'is'
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
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFF;
    z-index: 99;
    border-top: 1px solid #e0e0e0;
}

.footer ul {
    display:-webkit-box;
    display:box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}
.footer .nav .ispr {
    width: .4*1.5rem;
    height: .4*1.5rem;
    background-image: url(../../assets/images/foot-spr.png);
    -webkit-background-size: .4*1.5rem 3.2*1.5rem;
    -moz-background-size: .4*1.5rem 3.2*1.5rem;
    -ms-background-size: .4*1.5rem 3.2*1.5rem;
    -o-background-size: .4*1.5rem 3.2*1.5rem;
    background-size: .4*1.5rem 3.2*1.5rem;
    overflow: hidden;
    margin: 0 auto .08*1.5rem
}
.footer .nav .ispr.ih {
    background-position-y: -2.8*1.5rem
}
.footer .nav .ispr.ic {
    background-position-y: -.4*1.5rem
}
.footer .nav .ispr.is {
    background-position-y: -1.2*1.5rem
}
.footer .nav .ispr.if {
    background-position-y: -2*1.5rem
}
.footer .nav p {
    font-size: .22*1.5rem;
    line-height: .8;
    color: #999
}
.footer li {
    -webkit-box-flex: 1;
    width: 100%;
    text-align: center;
}
.footer li>a {
    display: block;
    padding: .12*1.5rem 0
}
.footer li>a.on .nav p {
    color: #FF5722
}
.footer li>a.on .nav .ispr.ih {
    background-position-y: -2.4*1.5rem
}
.footer li>a.on .nav .ispr.ic {
    background-position-y: 0
}
.footer li>a.on .nav .ispr.is {
    background-position-y: -.8*1.5rem
}
.footer li>a.on .nav .ispr.if {
    background-position-y: -1.6*1.5rem
}
</style>