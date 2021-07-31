<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
      >
        <v-card>
          <v-card-title>
            <div>
              Login
            </div>
            <v-spacer/>
          </v-card-title>
          <div class="pa-8">
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-text-field
                v-model="username"
                :rules="[un => !!un || `Required`,
                () => success || `Invalid username or password`]"
                label="Username"
              >
              </v-text-field>
              <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                :rules="[pw => !!pw || `Required`]"
                @click:append="show = !show"
                v-model="password"
                label="Password"
              >
              </v-text-field>
              <v-btn @click="auth">Login</v-btn>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {login} from "@/api/api";

export default Vue.extend({
  name: "Login",
  data: function () {
    return {
      name: "",
      username: "",
      password: "",
      show: false,
      valid: false,
      success: true,
    };
  },
  methods: {
    async auth() {
      if (!this.valid) {
        (this.$refs.form as Vue & { validate: () => boolean }).validate();
      } else if (await login(this.username, this.password)) {
        localStorage.username = this.username;
        await this.$router.push("/");
      } else {
        this.success = false;
        (this.$refs.form as Vue & { validate: () => boolean }).validate();
        this.success = true;
      }
    }
  },
});
</script>
