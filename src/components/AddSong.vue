<template>
    <v-layout>
        <v-flex xs4>
            <Panel title="Add New Song">
                <v-card-text>
                    <v-form v-model="valid" lazy-validation ref="form">
                        <v-text-field
                            v-model="song.title"
                            label="Title" required :rules="required">
                        </v-text-field>
                        <v-text-field
                            v-model="song.genre"
                            label="Genre" required :rules="required">
                        </v-text-field>
                        <v-text-field
                            v-model="song.artist"
                            label="Artist" required :rules="required">
                        </v-text-field>
                        <v-text-field
                            v-model="song.album"
                            label="Album" required :rules="required">
                        </v-text-field>
                        <v-text-field
                            v-model="song.albumImage"
                            label="Album Image URL" required :rules="required">
                        </v-text-field>
                        <v-text-field
                            v-model="song.youTubeId"
                            label="Album You Tube Id" required :rules="required">
                        </v-text-field>
                    </v-form>
                </v-card-text>    
            </Panel>
        </v-flex>
        <v-flex xs8>
            <panel title="lyrics" class="ml-2">
               <v-card-text v-model="song.lyrics" title="Lyrics"></v-card-text>
            </panel>
            <v-card-actions>
                <v-btn color="indigo" dark @click="create">Submit</v-btn>
            </v-card-actions>
        </v-flex>
    </v-layout>
</template>
<script>
import SongService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
    data(){
        return{
           song:{
               title: null,
               genre: null,
               artist:null,
               album: null,
               albumImage: null,
               youTubeId: null,
               lyrics: null
           },
           required: [(v) => !!v || 'This field is required'] 
        }
    },
    components:{
        Panel
    },
    methods:{
        async create() {
            try {
                                
                if (this.$refs.form.validate()){
                    this.song = await SongService.addNewSong(this.song);
                    this.$router.push('/songs');
                }
            } catch (err) {
                console.log('Error while creating new Song ' + err);
            }
        },
        say: function (message) {
            alert(message)
        }
    }
}
</script>
<style scoped>

</style>

