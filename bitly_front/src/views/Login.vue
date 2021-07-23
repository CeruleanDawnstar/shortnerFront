<template>
  <div class="container">
    <Form @submit="handleLogin" :validation-schema="schema">
      <div class="mb-3" v-if="!successful">
        <label for="pseudoInput" class="form-label">Pseudo</label>
        <Field type="text" class="form-control" id="pseudoInput" name="pseudo"/>
        <ErrorMessage name="pseudo" class="error-feedback" />
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">Password</label>
        <Field type="password" class="form-control" id="passwordInput" name="password"/>
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <router-link to="/SignUp" class="navbar-brand">Not registered? Sign Up here.</router-link>
      <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
        <span v-show="loading" class="spinner-border spinner-border-sm"> </span>
        <span> Submit</span>
      </button>
      <div class="form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      pseudo: yup.string().required("Pseudo is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profil");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profil");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>