<template>
  <v-container>
    <v-card :loading="loading" class="mx-auto my-12 detail" max-width="374">
      <v-card-title
        >Bulbasaur
        <h2>No. °001</h2></v-card-title
      >
      <div class="detail__backgroundImg">
        <v-img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        ></v-img>
      </div>

      <v-card-text>
        <p>
          Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de
          la punta de cola.
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
        <chips-custom name="Planta" color="#9dcb4f" textColor="#000000" />
        <chips-custom name="Veneno" color="#b97fc9" textColor="#ffffff" />
      </v-card-text>
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
  components: { ChipsCustom, CardDetail },
};
</script>