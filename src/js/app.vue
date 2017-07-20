<template>
    <div id="app">
        <!-- <transition name="bounce"> -->
            <router-view></router-view>
        <!-- </transition> -->
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        methods:{
            
        },
        mounted(){
            
        },
        watch:{
            $route(to,from){
                // console.log(to);
                if (!to.matched.length) {
                    this.$router.push('/404');
                }
            }
        }
    }
</script>
