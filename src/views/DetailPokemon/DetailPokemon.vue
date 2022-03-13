<template>
  <v-container>
    <v-card class="mx-auto my-12 detail">
      <v-card-title
        >{{ detailPokemon.name }}
        <h2>{{ `No. °00${detailPokemon.id_element}` }}</h2></v-card-title
      >
      <v-row no-gutters>
        <div class="detail__backgroundImg">
          <v-img :src="detailPokemon.image"></v-img>
        </div>
        <v-col>
          <v-card-text>
            <p>
              {{ detailPokemon.description }}
            </p>
            <v-row no-gutters align="center" class="detail__version">
              <h5>Versiones:</h5>
              <div class="detail__version__select">
                <v-img
                  max-width="25px"
                  contain
                  src="@/assets/icons/pokemon-one.png"
                ></v-img>
              </div>
              <v-img
                max-width="26.5px"
                contain
                src="@/assets/icons/pokemon-two.png"
              ></v-img>
            </v-row>
          </v-card-text>
          <card-detail />
          <v-card-text>
            <h5 class="my-4">Tipo</h5>
            <chips-custom
              :name="detailPokemon.element_english"
              color="#9dcb4f"
              textColor="#000000"
            />
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import ChipsCustom from "@/components/ChipsCustom/ChipsCustom.vue";
import CardDetail from "@/components/CardDetail/CardDetail";
export default {
  name: "DetailPokemons",
  data() {
    return {};
  },
  props: {
    pokemonName: String,
    detailPokemon: {
      default: {
        name: "",
        id_element: 0,
        description: "",
        image: "",
        element_english: "",
      },
    },
  },
  components: { ChipsCustom, CardDetail },
};
</script>