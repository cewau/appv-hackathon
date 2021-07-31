<template>
  <div>
    <br>
    <button @click="showInfo = !showInfo" style="margin-left: 16px">
      <strong>Info</strong>
    </button>
    <div v-if="showInfo">
      <v-container fluid>
        <student-info :student="student" />
      </v-container>
    </div>
    <br>
    <button @click="showModules = !showModules" style="margin-left: 16px">
      <strong>Modules</strong>
    </button>
    <div v-if="showModules">
      <v-container fluid v-for="item in modules" :key="item.code">
        <module-info :module="item" />
      </v-container>
      <div v-if="!hasModules">
        Nothing to show!
      </div>
    </div>
    <br>
    <button @click="showGrades = !showGrades" style="margin-left: 16px">
      <strong>Grades</strong>
    </button>
    <div v-if="showGrades">
      <grade-info :grades="grades" />
      <div v-if="!hasGrades">
        Nothing to show!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StudentInfo from "@/components/StudentInfo.vue";
import ModuleInfo from "@/components/ModuleInfo.vue";
import GradeInfo from "@/components/GradeInfo.vue";
import {getStudentData, getModuleData, getGradeData, formatGrades} from "@/api/api";
import {Module} from "@/types/module";
import {Grade} from "@/types/grade";

export default Vue.extend({
  name: "Student",
  components: {
    StudentInfo,
    ModuleInfo,
    GradeInfo,
  },
  data: function () {
    return {
      showInfo: true,
      showModules: true,
      showGrades: true,
      username: "",
      student: {},
      modules: [] as Module[],
      grades: [] as Grade[],
    };
  },
  computed: {
    hasModules(): boolean {
      return this.modules.length !== 0;
    },
    hasGrades(): boolean {
      return this.grades.length !== 0;
    }
  },
  methods: {
  },
  async mounted() {
    this.student = (await getStudentData())[0];
    this.modules = await getModuleData();
    this.grades = formatGrades(await getGradeData(), this.modules);
  }
});
</script>
