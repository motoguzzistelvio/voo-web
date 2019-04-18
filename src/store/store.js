import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../services/Api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state:{
        token: null,
        user: null,
        isLoggedin: false,
        songs: null
    },
    getters: {
        //evenodd: state => state.count % 2 === 0 ? 'even': 'odd'
        getAllSongs: state => {
            return state.songs;
        }
    },
    mutations: {
        setToken(state, token){
            state.token = token;
            state.isLoggedin = ((state.token === null) ? false: true);
        },
        setUser(state, user){
            state.user = user;
        },
        setAllSongs(state, songs){
            state.songs = songs;
        }
    },
    actions:{
        setToken({ commit }, token){
            commit('setToken', token);
        },
        setUser({ commit }, user){
            commit('setUser', user);
        },
        getAllSongs({ commit }){
            return new Promise((resolve, reject) => {
                Api.get('songs').then(response => {
                    commit('setAllSongs', response.data);
                    resolve(response);
                    //console.log('we in store '+ JSON.stringify(this.getters.getAllSongs));

                }, error => {
                    reject(error);
                });
            });
        }
    }
});