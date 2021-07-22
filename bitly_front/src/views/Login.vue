<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="pseudoInput" class="form-label">Pseudo</label>
        <input type="text" class="form-control" id="pseudoInput" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">Password</label>
        <input type="password" class="form-control" id="passwordInput">
      </div>
      <router-link to="/SignUp" class="navbar-brand">Not registered? Sign Up here.</router-link>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>