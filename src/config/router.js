import login from '../views/login.vue';
import page1 from '../views/page1.vue';
/*import {
    login,
    page1
} from '../views';*/

module.exports = [{
    path: '/',
    redirect: to => {
        return 'login';
    }
}, {
    path: '/login',
    component: login
},{
    path: '/page1',
    component: page1
}, ];