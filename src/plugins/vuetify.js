import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.pink.base,
        secondary: '#673ab7',
        accent: colors.orange.base,
        error: '#ff5722',
        warning: colors.blue.base,
        info: colors.lime.base,
        success: colors.green.base
      },
    },
  },
});
