<template>
    <div class="com-header">
        <div class="header-wrap">
            <h1 class="header-logo" href="#"></h1>
            <el-menu mode="horizontal"
                :default-active="activeIndex"
                :router="true"
                class="com-menu"
                >
                <el-menu-item :index="item.path"
                              v-for="(item,path) in menuData"
                              :key="path">{{item.text}}</el-menu-item>
            </el-menu>
            

        </div>
        
    </div>
</template>

<script>
    const menuData = [{
        text: '',
        path: '/district'
    }, {
        text: '',
        path: '/school'
    },{
        text: '',
        path: '/relation'
    }, {
        text: '',
        path: '/resources'
    }];

    export default {
        data() {
            return {
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
    
</style>