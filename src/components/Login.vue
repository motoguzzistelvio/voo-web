<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank" v-on="on">
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model='email' prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field v-model='pword' id="pword" prepend-icon="lock" name="pword" label="Password" type="password"></v-text-field>
                </v-form>
                <v-alert :value = validationerror color='error' v-html="error"></v-alert>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="indigo" dark @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import AuthService from '@/services/AuthService'  
  export default {
    data(){
      return{
        email: '',
        pword: '',
        error: null,
        validationerror: false
      }
    },
    methods:{
      async login(){
        try {
         const response = await AuthService.login({
              email: this.email,
              pword: this.pword
            });
            this.validationerror = false;

            this.$store.dispatch('setToken', response.data.token);
            this.$store.dispatch('setUser', response.data.user);
            this.$router.push('/home');
            
        }catch (error) {
            this.error = error.response.data.error;
            this.validationerror = true;
        }
      }
    },
    props: {
      source: String
    }
  }
</script>


