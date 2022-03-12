<template>
  <v-card :loading="loading" class="mx-auto my-12 cardList" max-width="374">
    <div class="cardList__backgroundImg">
      <v-img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
      ></v-img>
    </div>
    <v-card-text>
      <p class="text-subtitle-1">No. 001</p>
    </v-card-text>
    <v-card-title>Bulbasaur</v-card-title>
    <v-card-text>
      <chips-custom />
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