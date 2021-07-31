<template>
  <v-card>
    <v-card-title>{{ module.code }}</v-card-title>
    <v-card-subtitle>{{ module.title }}</v-card-subtitle>
    <v-btn text @click="showDetails = !showDetails"
    style="margin-bottom: 16px">
      {{ showDetails ? "Hide" : "Show" }} Details
    </v-btn>
    <div v-if="showDetails" style="padding: 0px 16px 16px 16px">
      <strong>Teacher:</strong> {{ module.teacher }}<br>
      <strong>MCs:</strong> {{ module.MC }}<br>
      <strong>Description:</strong> {{ module.description }}
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ModuleInfo",
  props: {
    module: {
      type: Object
    }
  },
  data: function () {
    return {
      showDetails: false,
    };
  },
  methods: {
  }
});
</script>
