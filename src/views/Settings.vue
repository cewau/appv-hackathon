<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Settings
      </v-card-title>
      <div class="pa-8">
        Welcome, visitor from {{ country }}
        <country-select :country.sync="country" />
        <v-switch
          @change="handleThemeSwitch"
          :label="`Dark theme: ${darkTheme}`"
          v-model="darkTheme" />
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import CountrySelect from "@/components/CountrySelect.vue";

export default Vue.extend({
  name: "Settings",
  components: { CountrySelect },
  data: function () {
    return {
      country: "Singapore",
      darkTheme: this.$vuetify.theme.dark
    };
  },
  methods: {
    handleThemeSwitch() {
      this.$vuetify.theme.dark = this.darkTheme;
    }
  },
});
</script>
