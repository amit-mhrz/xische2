<template>
  <div>
      <header>
        <b-container>
          <b-row>
            <b-col sm="12">
              <b-navbar type="dark" variant="dark">
                <router-link to="/" class="navbar-brand">
                  <div class="logo">
                      <h1><img src="./assets/img/xische_logo.png" alt="logo"></h1>
                  </div>
                </router-link>

                <div class="content-right">                    
                    <Slide right>
                      <ul class="navbar-nav">
                          <li class="nav-item">   
                            <a class="nav-link" href="#">About</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Terms Of Use</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Xische</a>
                          </li> 
                      </ul>
                    </Slide>
                </div>

              </b-navbar>
            </b-col>
          </b-row>
        </b-container>
      </header>

      <b-container class="single-page" v-if="currentListing">
          <b-row>
              <b-col>
                  <h1>
                      {{currentListing.fields['Title/Topic']}}
                  </h1>
              </b-col>
          </b-row>
          <b-row class="center_image">
              <b-col sm="12">
                   <b-img :src="imageURL" fluid alt="Responsive image" />
              </b-col>
          </b-row>
          <b-row>
              <b-col sm="12">
                  <p>{{currentListing.fields.Clipping}}</p>
                  <ul>
                      <li>Date Added: {{currentListing.fields['Date Added']}}</li>
                      <li>Lense: {{currentListing.fields['Lens-str']}}</li>
                      <li>Link: {{currentListing.fields['Link 1']}}</li>
                  </ul>
              </b-col>
          </b-row>

      </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import { Slide } from 'vue-burger-menu'
export default {
  name: "Card",
  components: {
    Slide
  },
  data() {
    return {
        id: null,
        listings: []
    };
  },
  computed: {
      currentListing() {
        return this.listings[this.listings.findIndex(x => x.id === this.id)];
      },
      imageURL() {
        if(this.currentListing)
            if(this.currentListing.fields.Attachment)
                return this.currentListing.fields.Attachment[0].thumbnails.large.url
        return 'https://picsum.photos/600/300/?image=25'

      }
  },
  mounted() {
      this.id = this.$route.params.id;
      this.getListings();
  },
  methods: {
      getListings(){
          var self = this;
            var app_id = "app838WoUK7gksAto";
            var app_key = "key4hPsF3lTzceL6g";
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/Weekly%20Report?maxRecords=50&view=Main%20View",
                {
                    headers: { Authorization: "Bearer "+app_key }
                }
            ).then(function(response){
                console.log(response.data.records);
                self.listings = response.data.records;
            }).catch(function(error){
                console.log(error)
            });

      },
  }
};
</script>
