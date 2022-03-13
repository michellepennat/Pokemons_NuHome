<template>
  <v-app>
    <v-app-bar color="#0ca0ce" app>
      <v-row no-gutters class="mx-3" align="center" justify="space-between">
        <router-link to="/" class="text-decoration-none">
          <h1>Pokemons</h1>
        </router-link>
        <div no-gutters class="d-flex flex-row">
          <modal-pokemon
            :id="detailPokemon.id_pokedex"
            :pokemonName="detailPokemon.name"
            :pokemonDesc="detailPokemon.description"
            :isEditing="visibleDetailButtons"
          />
          <modal-delete
            v-if="visibleDetailButtons"
            :id="detailPokemon.id_pokedex"
          />
        </div>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view
        :listPokemons="listPokemons"
        :detailPokemon="detailPokemon"
      />
    </v-main>
  </v-app>
</template>

<script>
import ApiPokemon from "./common/Api/Api";
import ModalDelete from "./components/ModalDelete/ModalDelete.vue";
import ModalPokemon from "./components/ModalPokemon/ModalPokemon.vue";
export default {
  name: "App",
  components: { ModalDelete, ModalPokemon },
  data() {
    return {
      listPokemons: [],
      detailPokemon: {},
      error: "",
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
        if (route.name === "home") {
          this.getPokemons();
        } else {
          this.getPokemonDetail(route.params.id);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.visibleDetailButtons = this.$router.history.current.name === "detail";
  },
  methods: {
    getPokemons() {
      ApiPokemon.get(
        "list/",
        async (functions) => {
          const response = await functions;
          if (response.data) {
            this.listPokemons = response.data.results;
          }
        },
        async () => {
          this.error = "Hubo un error al obtener la información";
        }
      );
    },
    getPokemonDetail(id) {
      ApiPokemon.get(
        `list/?id_element=${id}`,
        async (functions) => {
          const response = await functions;
          if (response.data) {
            this.detailPokemon = response.data.results[0];
            console.log(response.data.results[0]);
          }
        },
        async () => {
          this.error = "Hubo un error al obtener la información";
        }
      );
    },
  },
};
</script>
