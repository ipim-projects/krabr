<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
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
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
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

    <v-main>
      <router-view/>
    </v-main>

    <Footer/>
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
    drawer: false,
    menuItems: [
      {
        icon: 'mdi-home',
        title: 'Главная',
        link: '/'
      },
      {
        icon: 'mdi-file',
        title: 'Новости',
        link: '/news'
      },
      {
        icon: 'mdi-file',
        title: 'Мероприятия',
        link: '/events'
      },
      {
        icon: 'mdi-file',
        title: 'О предыдущих КРаБР',
        link: '/history'
      },
      {
        icon: 'mdi-folder-multiple-image',
        title: 'Галерея',
        link: '/gallery'
      },
      {
        icon: 'mdi-file',
        title: 'FAQ',
        link: '/faq'
      },
    ]
  })
};
</script>