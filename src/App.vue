<template>
  <v-app>
    <v-app-bar color="blue" app>
      <h1>Pokemons</h1>
    </v-app-bar>
    <v-main>
      <list-pokemon />
      <detail-pokemon />
    </v-main>
  </v-app>
</template>

<script>
import DetailPokemon from "./views/DetailPokemon/DetailPokemon";
import ListPokemon from "./views/ListPokemon/ListPokemon";
export default {
  name: "App",

  components: { ListPokemon, DetailPokemon },

  data: () => ({
    //
  }),
};
</script>
