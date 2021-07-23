<template>
  <div class="container">
    <Form @submit="handleRegister" :validation-schema="schema">
      <div class="mb-3">
        <label for="pseudoInput" class="form-label">Pseudo</label>
        <Field type="text" class="form-control" id="pseudoInput" name="pseudo"/>
        <ErrorMessage name="pseudo" class="error-feedback" />
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">Password</label>
        <Field type="password" class="form-control" id="passwordInput" name="password"/>
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="mb-3">
        <label for="passwordInputVerify" class="form-label">Password Verify</label>
        <Field type="password" class="form-control" id="passwordInputVerify" name="passwordVerify"/>
        <ErrorMessage name="passwordVerify" class="error-feedback" />
      </div>
      <router-link to="/Login" class="navbar-brand">Already registered? Login here</router-link>
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
  name: "SignUp",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      pseudo: yup
        .string()
        .required("Pseudo is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(3, "Must be at least 3 characters!")
        .max(40, "Must be maximum 40 characters!"),
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profil");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        () => {
          this.successful = true;
          this.loading = false;
          this.$router.push("/profil");
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>