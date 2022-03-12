<template>
  <v-app>
    <v-app-bar color="#0ca0ce" app>
      <v-row no-gutters class="mx-3" align="center" justify="space-between">
        <router-link to="/" class="text-decoration-none">
          <h1>Pokemons</h1>
        </router-link>
        <div no-gutters class="d-flex flex-row">
          <modal-pokemon
            :pokemonName="pokemonName"
            :isEditing="visibleDetailButtons"
          />
          <modal-delete v-if="visibleDetailButtons" />
        </div>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view pokemonName="" />
    </v-main>
  </v-app>
</template>

<script>
import ModalDelete from "./components/ModalDelete/ModalDelete.vue";
import ModalPokemon from "./components/ModalPokemon/ModalPokemon.vue";
export default {
  name: "App",
  components: { ModalDelete, ModalPokemon },
  data() {
    return {
      pokemonName: "",
      visibleButtonAdd: true,
      visibleDetailButtons: true,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.visibleDetailButtons = route.name === "detail";
        if (route.name === "detail") {
          this.pokemonName = "Bulbasaur";
        } else {
          this.pokemonName = "";
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.visibleDetailButtons = this.$router.history.current.name === "detail";
  },
};
</script>
