<template>
  <v-container>
    <p class="text-h4">Новости</p>
    <v-timeline
        align-top
        dense
    >
      <v-timeline-item
          color="pink"
          small
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>15 октября 2021</strong>
          </v-col>
          <v-col>
            <div class="text-body-2">
              Следующий КРаБР решено проводить в Крыму. По этой причине создается новый РЦР Казантип.
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item
          color="teal lighten-3"
          small
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>9 июня 2021</strong>
          </v-col>
          <v-col>
            <div class="text-body-2">
              Григорий Сапунков выступил вместе с группой Metallica и подготовил презентацию "Как заработать миллионы
              без кодинга".
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item
          color="teal lighten-3"
          small
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>4 марта 2021</strong>
          </v-col>
          <v-col>
            <div class="text-body-2">
              Томская рок-группа, состоящая из разработчиков РЦР Томск, получила Грэмми 2021 за лучшую песню "Релизим
              без
              капризов".
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item
          color="pink"
          small
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>12 сентября 2020</strong>
          </v-col>
          <v-col>
            <div class="text-body-2">
              На Крабре Рязанском случилось ЧП: несколько программистов отлупили взвод десантников. Как передает наш
              корреспондент с места событий, они сорвали с них береты и заставили учить наизусть язык Kotlin. Полицией
              принимаются все меры по предотвращению беспорядков.
            </div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "News"
}
</script>