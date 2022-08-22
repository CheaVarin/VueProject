import HomePage from './components/HomePage.vue'
import SingUp from './components/SingUp.vue'
import LoginPage from './components/LoginPage.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'

import { createRouter,createWebHistory } from 'vue-router'

const routes =[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SingUp,
        path:'/sing-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router