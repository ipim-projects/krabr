<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list
          nav
          dense
      >
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link" exact>
          <v-list-item-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="text-wrap" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="40"
        />
        <v-toolbar-title>КРаБР</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Ссылка</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer app color="primary" padless>
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: 'App',

  components: {
    Footer,
  },

  data: () => ({
    drawer: null,
    menuItems: [
      {
        icon: 'mdi-home',
        title: 'Главная',
        link: '/'
      },
      {
        icon: 'mdi-newspaper',
        title: 'Новости',
        link: '/news'
      },
      {
        icon: 'mdi-access-point',
        title: 'Мероприятия',
        link: '/events'
      },
      {
        icon: 'mdi-history',
        title: 'О предыдущих КРаБР',
        link: '/history'
      },
      {
        icon: 'mdi-folder-multiple-image',
        title: 'Галерея',
        link: '/gallery'
      },
      {
        icon: 'mdi-comment-question-outline',
        title: 'FAQ',
        link: '/faq'
      },
    ]
  })
};
</script>