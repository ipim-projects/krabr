<template>
  <v-footer color="primary" padless>
    <v-col
        class="text-center"
        cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Крабр</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>