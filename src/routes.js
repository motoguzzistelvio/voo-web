import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Songs from './components/Songs.vue'
import AddSong from './components/AddSong.vue'
import ViewSong from './components/ViewSong.vue'
import EditSong from './components/EditSong.vue'

import Store, { store } from './store/store';

const checkAuhentication = (to, from, next) =>{
    if (store.state.isLoggedin){
        next();
        return;
    }
    next('/login');
}

export default [
    {path: '/', name: 'root', component: Login, redirect:{name: 'home'}},
    {path: '/home', name: 'home', component: Home},
    {path: '/about', name: 'about', component: About},
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/signup', name: 'signup',component: Signup},
    {path: '/login', name: 'login', component: Login},
    {path: '/songs', name: 'songs', component: Songs, beforeEnter: checkAuhentication},
    {path: '/songs/create', name: 'songs-create', component: AddSong, beforeEnter: checkAuhentication},
    {path: '/songs/:songId', name: 'songs-view', component: ViewSong, beforeEnter: checkAuhentication},
    {path: '/songs/:songId/edit', name: 'songs-edit', component: EditSong, beforeEnter: checkAuhentication}

]