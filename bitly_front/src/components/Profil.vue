<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>Welcome {{pseudo}} to your profil !</strong>
      </h3>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Profil',
  /* data() {
    return {
      pseudo: "",
    };
  },
  methods: {
    setValue() {
        let token_payload = JSON.parse(atob(token.split('.')[1]));
        pseudo = token_payload.user.pseudo;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  } */
};
</script>