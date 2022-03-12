<template>
  <v-container>
    <card-list />
  </v-container>
</template>

<script>
import CardList from "@/components/CardList/CardList";
export default {
  name: "ListPokemons",
  data() {
    return {};
  },
  components: { CardList },
};
</script>