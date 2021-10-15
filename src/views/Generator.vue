<template>
  <v-container>
    <p class="text-h4">Определитель места проведения следующего КРаБР</p>
    <p class="text-h6">Следующей площадкой для проведения КРаБР выбран: <strong class="green--text">{{ newKrabr }}</strong></p>
  </v-container>
</template>

<script>
export default {
  name: "Generator",
  computed: {
    newKrabr() {
      const rcr = ['РЦР Москва',
        'РЦР Санкт-Петербург',
        'РЦР Екатеринбург',
        'РЦР Казань',
        'РЦРТиКК Санкт-Петербург'
      ];
      const rand = Math.floor(Math.random() * rcr.length);
      return rcr[rand];
    }
  }
}
</script>