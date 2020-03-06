<template>
    <v-navigation-drawer 
    :value="value" 
    @input="$emit('input',$event)"
    :mini-variant="mini"
    color="primary"
    dark
    absolute
    temporary>
    <v-list>
        <v-list-item
        v-if="mini"
        @click.stop="mini=!mini">
        
        <v-list-item-action>
            <v-icon>chevron_right</v-icon>
        </v-list-item-action>
        </v-list-item>

        <v-list-item avatar tag="div">
            <v-list-item-avatar>
                <v-icon large>person</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>User Name</v-list-item-title>
                <v-list-item-subtitile>Setor Pessoal</v-list-item-subtitile>
            </v-list-item-content>
                
                <v-list-item-action>
                    <v-btn icon @click.stop="mini=!mini"><v-icon>chevron_left</v-icon></v-btn>
                </v-list-item-action>  
        </v-list-item>

    </v-list>
    <v-list class="pt-0" dense>
        <v-divider light></v-divider>
            <v-list-item v-for="item in items" 
            :key="item.item"
            :to="item.url"
            :exact="item.exact"
            @click.stop="$emit('input',false)">
            <v-list-item-action><v-icon>{{item.icon}}</v-icon></v-list-item-action>
            <v-list-item-content>{{item.title}}</v-list-item-content>
            </v-list-item>
        
    </v-list>

    </v-navigation-drawer>
    
</template>
<script>
export default {
    name:'AppMenu',
    props:{
        value:Boolean,
    },
    data:() => ({
        items:[
            {title:'Inicio',icon:'dashboard',url:'/home',exact:true},
            {title:'Buscar servidor',icon:'search',url:'/pesquisar',exact:true},
            {title:'Cadastrar servidor',icon:'person_add',url:'/cadastrar',exact:true},
            {title:'Cadastrar dependente',icon:'group_add',exact:true},
            {title:'Painel de ocorrencia',icon:'event_note',url:'/ocorrencia',exact:true},
            {title:'Ver aniversariantes',icon:'cake',url:'/aniversariantes',exact:true},
            {title:'Configurações',icon:'settings',url:'/Configuracoes',exact:true},
            {title:'Sair',icon:'exit_to_app'}
        ],
        mini: false
    })
}
</script>