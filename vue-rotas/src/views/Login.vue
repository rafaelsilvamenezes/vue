<template>
    <v-container fill-height>
        <v-row class="justify-center">
            <v-col 
            xs="12"
            sm="6"
            md="5"
            lg="3"
            >
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark>
                        <v-toolbartitle>{{texts.toolbar}}</v-toolbartitle>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field
                        prepend-icon="person"
                        label="Nome completo"
                        name="name"
                        type="text"
                        class="mb-3"
                        v-if="!isLogin"></v-text-field>
                        <v-text-field
                        name="login"
                        label="Email"
                        type="text"
                        :error-messages="loginErrors"
                        :success="!$v.user.login.$invalid"
                        prepend-icon="email"
                        v-model.trim="$v.user.login.$model" ></v-text-field>
                        <v-text-field
                        name="senha"
                        label="Senha"
                        type="password"
                        :error-messages="passwordErrors"
                        :success="!$v.user.password.$invalid"
                        prepend-icon="lock"
                        v-model="$v.user.password.$model"></v-text-field>
                        </v-form>
                        <a @click="isLogin=!isLogin">{{texts.button}}</a>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" large :disabled="$v.$invalid"
                        @click="submit">{{texts.toolbar}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name:'Login',
    data:()=>({
        isLogin:true,
        user:{
            login:'',
            password:'',
        }
    }),
    methods: {
        submit(){
            console.log('User:',this.user)
        }
    },
    computed: {
        texts(){
             return this.isLogin
             ? { toolbar : 'Entrar', button : 'Ainda não possui uma conta?'}
             : { toolbar:'Painel de cadastro',button:'Ja tenho uma conta'}
        },
        loginErrors(){
            const errors=[]
            const login = this.$v.user.login
            if(!login.$dirty){
                return errors
            }
            !login.required && errors.push('Email é obrigatório!')
            !login.email && errors.push('Insira um email válido!')
            return errors
        },
        passwordErrors(){
            const errors=[]
            const password = this.$v.user.password
            if(!password.$dirty){
                return errors
            }
            !password.required && errors.push('Senha é obrigatório!')
            !password.minLength && errors.push(`Insira pelo menos ${password.$params.minLength.min} caracteres!`)
            return errors
        
    }},
    validations:{
        user:{
            login:{
                required,
                email
            },
            password:{
                required,
                minLength:minLength(6)
            }
        }
    },
}
</script>