<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        lg="6"
        sm="12"
        v-for="(pokemon, i) in listPokemons"
        :key="i"
        :index="i"
      >
        <card-list
          :name="pokemon.name"
          :id_element="pokemon.id_element"
          :image="pokemon.image"
          :element_english="pokemon.element_english"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardList from "@/components/CardList/CardList";
export default {
  name: "ListPokemons",
  data() {
    return {};
  },
  props: {
    listPokemons: Array,
  },
  components: { CardList },
};
</script>