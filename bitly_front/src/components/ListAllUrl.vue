<template>
  <div class="row">

    <div class="col-xl-8">
      <h4>url List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(link, index) in links"
          :key="index"
          @click="setActiveLink(link, index)"
        >
          {{ link.longLink }}
        </li>
      </ul>
            
    </div>
    <div class="col-xl-4">
      <div v-if="currentLink">
        <h4>Links</h4>
        <div>
          <label><strong>longLink:</strong></label> {{ currentLink.longLink }}
        </div>
        <div>
          <label><strong>ShortLink:</strong></label><a href= ""> {{ currentLink.shortLink }} </a>
        </div>

        <a class="badge badge-warning"
          :href="'/link/' + currentLink.idLink"
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
          this.links = response.data;
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