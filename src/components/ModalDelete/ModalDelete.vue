<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab icon v-bind="attrs" v-on="on"
          ><v-icon color="white"> mdi-delete </v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">¿Deseas eliminar el pokemon?</span>
        </v-card-title>
        <div class="my-3 px-3">
          <v-alert type="success" v-if="message !== ''">{{ message }}</v-alert>
          <v-alert type="error" v-if="error !== ''">{{ error }}</v-alert>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="red darken-1" text @click="deletePokemon()">
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ApiPokemon from "../../common/Api/Api";
export default {
  name: "ModalDelete",
  data() {
    return {
      dialog: false,
      message: "",
      error: "",
    };
  },
  props: {
    name: String,
    color: String,
    textColor: String,
    id: Number,
  },
  components: {},
  methods: {
    deletePokemon() {
      ApiPokemon.delete(
        `delete/${this.id}`,
        async (functions) => {
          const response = await functions;
          if (response.data) {
            this.message = "El pokemon se ha eliminado correctamente";
            this.error = "";
          }
        },
        async () => {
          this.error = "Hubo un error al eliminar la información";
          this.message = "";
        }
      );
    },
  },
};
</script>