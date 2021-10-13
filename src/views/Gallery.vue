<template>
  <v-carousel height="auto">
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {src: require('@/assets/krabr2019/7L3A6860.jpg')},
        {src: require('@/assets/krabr2019/7L3A6861.jpg')},
        {src: require('@/assets/krabr2019/7L3A6862.jpg')},
        {src: require('@/assets/krabr2019/7L3A6863.jpg')},
        {src: require('@/assets/krabr2019/7L3A6864.jpg')},
        {src: require('@/assets/krabr2019/7L3A6866.jpg')},
        {src: require('@/assets/krabr2019/7L3A6868.jpg')}
      ]
    }
  }
}
</script>