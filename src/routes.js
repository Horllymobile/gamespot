/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from  './components/Home/index.vue';
import Signin from './components/Signin/index.vue';
import Dashboard from './components/Dashboard/index.vue';
import Add_Post from './components/Dashboard/Add_post.vue';
import List_Post from './components/Dashboard/listPost.vue';
import MainDashboard from './components/Dashboard/main.vue';


import store from './store/store';

Vue.use(VueRouter);

const authGuard = {
    beforeEnter: (to, from, next) => {

        const redirect =() => {
            if(store.state.admin.token){
                if(to.path === "/signin"){
                    next("/dashboard");
                }else{
                    next()
                }
                
            }else{
                if(to.path === "/signin"){
                    next()
                }else{
                    next("/")
                }
            }
        }
        if(store.state.admin.refreshLoading){
            store.watch((state, getters)=> getters["admin/refreshLoading"],()=>{
                redirect();
            })
        }else{
            redirect();
        }
    } 
}

const routes = [
    {path:'/',component:Home},
    {path:'/signin',component:Signin,...authGuard},
    {path:'/dashboard',component:Dashboard,children:[
        {path:"/", component:MainDashboard},
        {path:'add_posts', component:Add_Post},
        {path:'list_posts', component:List_Post}
    ],...authGuard}
];


export default new VueRouter({
    mode:'history',
    routes,
    scrollBehavior(){
        // console.log(from);
        // console.log(to);
        // console.log(savePosition);
        return {x:0,y:0}
    }
})