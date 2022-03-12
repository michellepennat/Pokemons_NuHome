<template>
  <v-card :loading="loading" class="mx-auto my-12 cardList" max-width="374">
    <div class="cardList__backgroundImg">
      <v-img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
      ></v-img>
    </div>
    <p>No. °001</p>
    <v-card-title>Bulbasaur</v-card-title>
    <v-card-text>
      <chips-custom name="Planta" color="#9dcb4f" textColor="#000000" />
      <chips-custom name="Veneno" color="#b97fc9" textColor="#ffffff" />
    </v-card-text>
  </v-card>
</template>

<script>
import ChipsCustom from "../ChipsCustom/ChipsCustom.vue";
export default {
  name: "CardList",
  data() {
    return {};
  },
  props: {
    propsData: {
      default: null,
    },
  },
  components: { ChipsCustom },
};
</script>