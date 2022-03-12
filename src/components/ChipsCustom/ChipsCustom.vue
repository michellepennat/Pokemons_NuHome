<template>
  <v-chip :color="color" :text-color="textColor" label>{{ name }}</v-chip>
</template>

<script>
export default {
  name: "ChipsCustom",
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