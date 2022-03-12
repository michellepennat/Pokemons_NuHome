<template>
  <v-card
    color="#0ca0ce"
    :loading="loading"
    class="mx-auto my-2 py-1 px-2 cardDetail"
    max-width="374"
  >
    <v-card-text>
      <v-row>
        <v-col>
          <h6>Altura</h6>
          <span>0,6m</span>
        </v-col>
        <v-col>
          <h6>Categoría</h6>
          <span>Lagartija</span>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col>
          <h6>Peso</h6>
          <span>8,5kg</span>
        </v-col>
        <v-col>
          <h6>Habilidad</h6>
          <span
            >Mar Llamas <v-icon color="white"> mdi-help-circle </v-icon></span
          >
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <h6>Sexo</h6>
      <v-icon color="black"> mdi-gender-female </v-icon>
      <v-icon color="black"> mdi-gender-male </v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardDetail",
  data() {
    return {};
  },
  components: {},
};
</script>