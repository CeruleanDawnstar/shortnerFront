<template>
  <div class="form-group">
    <!--<div v-if="!submitted">-->
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
      <br>
      <br>
    <div>
        <p>short URL :<a :href="shortLink"> {{shortLink}}</a></p>
        <p>{{dateLink}}</p>
    </div>
    </div>

    <!--<div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUrl">Add</button>
    </div>-->
 <!-- </div>--> 

</template>

<script>
import urlService from "../services//UrlService";

export default {
  name: "add",
  data() {
    return {
      link: {
        id: null,
        longLink: "",
        published: false
      },
      submitted: false,
      shortLink: "",
      dateLink: ""
    };
  },
  methods: {
    saveUrl() {
      var data = {
        longUrl: this.link.longLink,
      };

      urlService.create(data)
        .then(response => {
          console.log(response.data);
          this.link.longLink = response.data.longLink;
          this.shortLink = response.data.shortLink;
          this.dateLink = response.data.dateLink;
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
