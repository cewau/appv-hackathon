<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-card-title>
          Welcome, {{ username }}!
        </v-card-title>
        <v-btn @click="logout" style="margin: 0px 16px 16px 16px">
          Logout
        </v-btn>
      </v-card>
    </v-container>
    <div v-if="access === 0">
      <student/>
    </div>
    <div v-else-if="access === 1">
      <teacher/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Student from "@/components/Student.vue";
import Teacher from "@/components/Teacher.vue";
import {getStudentData, logout} from "@/api/api";

export default Vue.extend({
  name: "Main",
  components: {
    Student,
    Teacher,
  },
  data: function () {
    return {
      username: "",
      access: -1,
    };
  },
  methods: {
    async logout() {
      localStorage.username = "";
      await logout();
      await this.$router.push("/login");
    },
    async checkAuth() {
      if (typeof localStorage.username == "undefined") {
        localStorage.username = "";
      }
      if (localStorage.username === "") {
        await this.$router.push("/login");
        return false;
      }
      return true;
    }
  },
  async mounted() {
    if (await this.checkAuth()) {
      this.username = localStorage.username;
      const students = await getStudentData();
      if (students.length === 1 && students[0].name === this.username) {
        this.access = 0;
      } else {
        this.access = 1;
      }
    }
  }
});
</script>

<style scoped>

</style>

