<template>
  <v-card>
    <v-card-title>
      <img alt="pfp" :src="getPfp()" width="48" height="48" style="padding: 4px">
      {{ student.name }}
    </v-card-title>
    <v-card-subtitle>{{ student.class }}</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "StudentInfo",
  props: {
    student: {
      type: Object
    }
  },
  data: function () {
    return {

    };
  },
  methods: {
    getPfp() {
      const pfp = this.student.profilePicture;
      if (typeof pfp === "undefined") {
        return "https://freesvg.org/img/abstract-user-flat-4.png";
      }
      return pfp;
    }
    // handleUpdate() {
    //   this.$emit("update:country", this.selectedCountry);
    // }
  },
});
</script>
