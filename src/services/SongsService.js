import Api from '@/services/Api'

export default {
    addNewSong(songData){
        return Api.post('songs', songData);
    },
    getAllSongs(){
        return Api.get('songs');
    },
    showSong(songId){
        return Api.get(`songs/${songId}`);
    },
    putSong(song){
        return Api.put(`songs/${song.id}`, song);
    }
}