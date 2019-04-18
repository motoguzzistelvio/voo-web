import Api from '@/services/Api.js'

export default{
    register(creds){
        return Api.post('register', creds);
    },
    login(creds){
        return Api.post('login', creds);
    }
}