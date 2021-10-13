<template>
  <v-container>
    <p class="text-h4"><span class="text-decoration-line-through">Вибратор</span> Выбиратор крабровведения</p>
    <p class="text-h6">Рандомно выбран для крабровведения: <strong class="green--text">{{ newKrabr }}</strong></p>
    <p class="caption">Следующая процедура крабровведения состоится следуюшему пациенту :)</p>
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
        'РЦР Казантип',
        'РЦРТиКК'
      ];
      const rand = Math.round(5 * Math.random());
      return rcr[rand];
    }
  }
}
</script>