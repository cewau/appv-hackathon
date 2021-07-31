<template>
  <v-container fluid>
    <v-card>
      <v-data-table :headers="headers" :items="grades">
        <template v-slot:item.MC="{ item }">
          <v-chip :color=getChipColor(item.MC) style="justify-content: center">
            <p style="margin: 0 auto; color: #FFFFFF">{{ item.forecast }}</p>
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GradeInfo",
  props: {
    grades: {
      type: Array
    }
  },
  data: function () {
    return {
      headers: [{
        text: "Module Code",
        value: "moduleCode"
      }, {
        text: "MC",
        value: "MC"
      }, {
        text: "Grade",
        value: "grade"
      }, {
        text: "Comments",
        value: "comments"
      }],
    };
  },
  methods: {
    getChipColor(value: number, scale=4): string {
      return "hsl(" + value*scale + ", 100%, 50%)";
    },
  },
});
</script>
