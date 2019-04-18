<template>
    <v-container fluid grid-list-xl>
        <v-layout row>
            <v-flex xs6>
                <panel title="View Song Details">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song.title">
                                {{song===null?null:song.title}}
                            </div>
                            <div class="song.artist">
                                {{song===null?null:song.artist}}
                            </div>
                            <div class="song.genre">
                                {{song===null?null:song.genre}}
                            </div>
                            <v-btn color="indigo" 
                            dark
                            @click="navigateTo({
                                name: 'songs-edit',
                                params:{
                                    songId: song.id
                                }
                            })">Edit</v-btn>
                            <v-btn color="indigo" dark>Delete</v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <img class="al-img" :src="song===null?null:song.albumImage"/>
                            <br/>
                                {{song===null?null:song.albumImage}}
                        </v-flex>
                    </v-layout>
                </panel>
            </v-flex>
            <v-flex xs6 class="ml-2">
                <panel title="lyrics">
                    {{song===null?null:song.lyrics}}
                </panel>
            </v-flex>
        </v-layout>
        <v-layout>
            <!--
            <v-flex>
                <panel title="Youtube video">
                    <youtube :video-id="song.youtubeId" ref="youtube" playing="playing"></youtube>
                </panel>
            </v-flex>-->
        </v-layout>
    </v-container>
</template>
<script>

import SongsService from '../services/SongsService'
import Panel from './Panel'

export default {
    data () {
        return{
            song: null,
            playing: false
        }
    },
    components:{
        Panel
    },
    methods: {
        navigateTo(route){
            this.$router.push(route);
        }
    },
    async mounted () {
        const songId = this.$route.params.songId
        this.song = (await SongsService.showSong(songId)).data
    }
}
</script>
<style scoped>
    .song{
        padding: 20px;
        height: 200px;
        overflow: hidden;
        text-align: center;
    }
    .song-title{
        font-size: 30px;
    }
    .song-artist{
        font-size: 24px;
    }
    .song-genre{
        font-size: 18px;
    }
    .al-img{
        width: 70%;
        margin: 0 auto;
    }
</style>

