<template>
  <v-container>

    <v-row justify="center">
      <v-img
          src="../assets/logo.png"
          class="my-3"
          contain
          height="200"
      />
    </v-row>
    <v-row justify="center">
      <p class="text-h4 text-center">Конференция разработчиков Банка России</p>
    </v-row>
    <v-row justify="center">
      <v-col md="6">
        <div>
          <vue-poll v-bind="options" @addvote="addVote"/>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VuePoll from 'vue-poll'

export default {
  name: 'Home',
  components: {
    VuePoll
  },
  data() {
    return {
      options: {
        question: 'Какое подразделение вы хотели бы видеть принимающей стороной КРаБР-2022?',
        answers: [
          {value: 1, text: 'РЦР Москва', votes: 35},
          {value: 2, text: 'РЦР Санкт-Петербург', votes: 53},
          {value: 3, text: 'РЦР Екатеринбург', votes: 30},
          {value: 4, text: 'РЦР Казань', votes: 30},
          {value: 5, text: 'РЦР Казантип', votes: 156},
          {value: 6, text: 'РЦТиКК', votes: 10}
        ]
      }
    }
  },
  methods: {
    addVote(obj) {
      console.log('You voted ' + obj.text + '!');
    }
  }
}
</script>
