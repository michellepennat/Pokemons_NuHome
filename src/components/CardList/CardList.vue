<template>
  <router-link :to="`detail/${id_element}`" class="text-decoration-none">
    <v-card class="my-12 cardList" max-width="374">
      <div class="cardList__backgroundImg">
        <v-img :src="image"></v-img>
      </div>
      <p>{{ `No. °00${id_element}` }}</p>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text>
        <chips-custom
          :name="element_english"
          color="#9dcb4f"
          textColor="#000000"
        />
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
import ChipsCustom from "../ChipsCustom/ChipsCustom.vue";
export default {
  name: "CardList",
  data() {
    return {};
  },
  props: {
    name: String,
    id_element: Number,
    image: String,
    element_english: String,
  },
  components: { ChipsCustom },
};
</script>