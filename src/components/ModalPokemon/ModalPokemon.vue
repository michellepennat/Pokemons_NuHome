<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
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
                <v-text-field
                  v-model="description"
                  label="Descripción*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-alert type="success" v-if="message !== ''">{{
              message
            }}</v-alert>
            <v-alert type="error" v-if="error !== ''">{{ error }}</v-alert>
            <small class="py-">*Indica los datos obligatorios</small>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="save()"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ApiPokemon from "../../common/Api/Api";
export default {
  name: "ModalPokemon",
  data() {
    return {
      name: "",
      description: "",
      message: "",
      error: "",
      dialog: false,
    };
  },
  props: {
    isEditing: Boolean,
    id: Number,
    pokemonName: String,
    pokemonDesc: String,
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
    pokemonDesc: {
      handler: function (newVal) {
        console.log(newVal);
        this.description = newVal;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    save() {
      if (this.name === "" || this.description === "") {
        this.error = "Todos los datos son requeridos";
        this.message = "";
        return;
      }
      if (this.isEditing) {
        ApiPokemon.put(
          {
            id_pokedex: 2,
            name: this.name,
            id_element: 2,
            image:
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
            description: this.description,
          },
          `update/${this.id}`,
          async (functions) => {
            const response = await functions;
            console.log(response);
            if (response.data && response.data.id_pokedex !== null) {
              this.message = "El pokemon se ha guardado correctamente";
              this.error = "";
            }
          },
          async () => {
            this.error = "Hubo un error al crear la información";
            this.message = "";
          }
        );
      } else {
        ApiPokemon.post(
          {
            id_pokedex: 2,
            name: this.name,
            id_element: 2,
            image:
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
            description: this.description,
          },
          "create/",
          async (functions) => {
            const response = await functions;
            console.log(response);
            if (response.data && response.data.id_pokedex !== null) {
              this.message = "El pokemon se ha guardado correctamente";
              this.error = "";
            }
          },
          async () => {
            this.error = "Hubo un error al crear la información";
            this.message = "";
          }
        );
      }
    },
  },
};
</script>