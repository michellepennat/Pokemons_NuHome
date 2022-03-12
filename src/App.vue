<template>
  <v-app>
    <v-app-bar color="#0ca0ce" app>
      <h1>Pokemons</h1>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
};
</script>
