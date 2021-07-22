<template>
  <div class="form-group">
   
      <div class="form-group">
        <label for="longLink">please enter your URL</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="longLink"
          required
          v-model="link.longLink"
          name="longLink"
        />
      </div>

      <button @click="saveUrl" class="btn btn-success">Submit</button>
    </div>

    <!--<div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUrl">Add</button>
    </div>-->
 
</template>

<script>
import urlService from "../services//UrlService";

export default {
  name: "add",
  data() {
    return {
      link: {
        id: null,
        longUrl: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveUrl() {
      var data = {
        longUrl: this.link.longLink,
      };

      urlService.create(data)
        .then(response => {
          this.link.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newUrl() {
      this.submitted = false;
      this.link = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
