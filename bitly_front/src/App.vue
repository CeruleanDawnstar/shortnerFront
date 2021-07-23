<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <router-link to="/" class="navbar-brand">Shortner</router-link>
      <div class="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Generate link</router-link>
          </li>
          <li class="nav-item dropdown" v-if="currentUser">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              User
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/profil" class="dropdown-item">Profil</router-link>
              <li><hr class="dropdown-divider"></li>
              <router-link to="/links" class="dropdown-item">My links</router-link>
            </ul>
          </li>
          <li class="nav-item" v-if="!currentUser">
            <router-link to="/signUp" class="nav-link">Sign Up</router-link>
          </li>
          <li class="nav-item" v-if="!currentUser">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="currentUser">
            <router-link @click="logOut()" to="/login" class="nav-link">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    currentUser() {
      return this.$store.state.auth.token;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>
