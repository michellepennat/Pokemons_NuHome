<template>
  <div>
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab icon v-bind="attrs" v-on="on"
          ><v-icon color="white"> mdi-delete </v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">¿Deseas eliminar el pokemon?</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ModalDelete",
  data() {
    return {};
  },
  props: {
    name: String,
    color: String,
    textColor: String,
  },
  components: {},
};
</script>