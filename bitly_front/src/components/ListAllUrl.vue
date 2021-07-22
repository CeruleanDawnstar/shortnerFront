<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="please enter your URL"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="shortner"
          >
            submit
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>url List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(link, index) in links"
          :key="index"
          @click="setActiveLink(link, index)"
        >
          {{ link.title }}
        </li>
      </ul>
            
    </div>
    <div class="col-md-6">
      <div v-if="currentLink">
        <h4>Links</h4>
        <div>
          <label><strong>longLink:</strong></label> {{ currentLink.longLink }}
        </div>
        <div>
          <label><strong>ShortLink:</strong></label> {{ currentLink.shortLink }}
        </div>

        <a class="badge badge-warning"
          :href="'/link/' + currentLink.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a link...</p>
      </div>
    </div>
  </div>
</template>

<script>
import urlService from "../services/UrlService";

export default {
  name: "link-list",
  data() {
    return {
      links: [],
      currentLink: null,
      currentIndex: -1,
      longLink: ""
    };
  },
  methods: {
    retrieveLink() {
      urlService.getAll()
        .then(response => {
          this.link = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveLink();
      this.currentLink = null;
      this.currentIndex = -1;
    },

    setActiveLink(link, index) {
      this.currentLink = link;
      this.currentIndex = index;
    },

    shortner(){

    }

  },
  mounted() {
    this.retrieveLink();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>