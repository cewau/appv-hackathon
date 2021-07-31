<template>
  <v-autocomplete
    @change="handleUpdate"
    v-model="selectedCountry"
    label="Country"
    :items="countries" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CountrySelect",
  props: {
    country: {
      type: String,
      default: ""
    }
  },
  data: function () {
    return {
      countries: [
        "UK",
        "France",
        "USA",
        "Japan",
        "China",
        "Singapore"
      ],
      selectedCountry: this.$props.country,
    };
  },
  methods: {
    handleUpdate() {
      this.$emit("update:country", this.selectedCountry);
    }
  },
});
</script>
