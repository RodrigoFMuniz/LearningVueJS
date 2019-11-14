<template>
  <v-app>
    <app-menu />
    <app-navigation />
    <v-content>
      <app-carrousel />
    </v-content>
    <app-footer />

    <!-- <v-navigation-drawer app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Menu</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile v-for="item in itensMenu" :key="item.titulo">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>-->

    <!--<v-toolbar app>     
      <v-toolbar-title class="headline text-uppercase">
				<span>Desafio</span>
				<span class="font-weight-light">Componente</span>
      </v-toolbar-title>
    </v-toolbar>-->

    <!-- <v-carousel>
				<v-carousel-item
					v-for="(item,i) in fotos"
					:key="i"
					:src="item.src"></v-carousel-item>
    </v-carousel>-->

    <!-- 
		<v-footer class="pa-3" app>
			<v-spacer></v-spacer>
			<div>Curso Vue &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>-->
  </v-app>
</template> 

<script>
import Footer from "@/components/template/Footer.vue";
import Navigation from "@/components/template/Navigation.vue";
import Carrousel from "@/components/user/Carrousel.vue";
import Menu from "@/components/template/Menu.vue";

export default {
  components: {
    "app-footer": Footer,
    "app-navigation": Navigation,
    "app-carrousel": Carrousel,
    "app-menu": Menu
  }
};
</script>
