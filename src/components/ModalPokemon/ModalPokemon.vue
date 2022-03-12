<template>
  <div>
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-if="!isEditing" fab icon v-bind="attrs" v-on="on"
          ><v-icon color="white" large> mdi-plus-circle </v-icon></v-btn
        >
        <v-btn v-else fab icon v-bind="attrs" v-on="on"
          ><v-icon color="white" large> mdi-pencil </v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Create new pokemon</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  label="Nombre*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Descripción*" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Indica los datos obligatorios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ModalPokemon",
  data() {
    return {
      name: "",
      description: "",
    };
  },
  props: {
    isEditing: Boolean,
    pokemonName: String,
  },
  components: {},
  watch: {
    pokemonName: {
      handler: function (newVal) {
        console.log(newVal);
        this.name = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>