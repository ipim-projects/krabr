<template>
  <v-container>
    <p class="text-h4">О предыдущих КРаБР</p>
    <v-timeline>
      <v-timeline-item
          color="pink"
          small
      >
        <template v-slot:opposite>
        <span
            class="headline font-weight-bold pink--text"
            v-text="2019"
        ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 pink--text">
            Детство
          </h2>
          <div>
            Когда КРаБР был маленький, он рос на севере в Сибири. Детство его проходило в городе Томск. Там его обучили
            быть интересным и музыкальным, не стесняться и дарить удовольствие.
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
          color="orange"
          small
      >
        <template v-slot:opposite>
        <span
            class="headline font-weight-bold orange--text"
            v-text="2020"
        ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 orange--text">
            Юность
          </h2>
          <div>
            Юность КРаБР проходила на удаленке в Москве и МО, там он сдавал ПЦР, вакцинировался и стал более
            зрелым. Появилась щетина и попробовал алкоголь.
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
          color="amber"
          small
      >
        <template v-slot:opposite>
        <span
            class="headline font-weight-bold amber--text"
            v-text="2021"
        ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 amber--text">
            Служба в армии
          </h2>
          <div>
            Службу в ВС РФ КРаБР проходит в настоящий момент в ВДВ в городе Рязань. "Расплескалась синева,
            расплескалась..."
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
          color="cyan"
          small
      >
        <template v-slot:opposite>
        <span
            class="headline font-weight-bold cyan--text"
            v-text="2022"
        ></span>
        </template>
        <div class="py-4">
          <h2 class="headline font-weight-light mb-4 cyan--text">
            Дембель!
          </h2>
          <div>
            А где будет после дембеля, где он женится и где появятся маленькие крабрята - решать вам. Голосуйте!
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "History"
}
</script>