<template>
  <div>
       <filters @searched="searchIt" @topicSelected="topicSelected" @dateFilter="dateFilter" @lensSelected="selectLens" @publicationSelected="selectPublication"></filters>

      <section class="content__bottom">
                
          <!-- Filters Applied -->
          <section class="section__appliedFilters">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-4">
                          <div class="showing">
                              <p><span>12</span> Results</p>
                          </div>
                      </div>
                      <div class="col-sm-8">
                          <div class="appliedFilters">
                          {{selectedTopics}}
                              <ul>
                                  <li><a href="#">Future <span class="icon icon-close"><img src="/src/assets/img/close.png" alt=""></span></a></li>
                                  <li><a href="#">London <span class="icon icon-close"><img src="/src/assets/img/close.png" alt=""></span></a></li>
                                  <li><a href="#">Tokyo <span class="icon icon-close"><img src="/src/assets/img/close.png" alt=""></span></a></li>
                                  <li><a href="#">Financial <span class="icon icon-close"><img src="/src/assets/img/close.png" alt=""></span></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <!-- Products -->
          <section class="section__products">
              <div class="container">
                  <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-3" v-for="(listing, i) in filteredListings" :key="i" @click="openListing(i)">
                        <div class="item__box">
                            <b-card :img-src="getImageUrl(i)" img-alt="Image"></b-card>
                            <div class="item__desc">
                                <div class="item__case">
                                    <p><span class="icon icon-case"><img src="/src/assets/dist/img/book-open.svg" alt=""></span>{{ listing.fields['Type'][0] }}</p>
                                </div>
                                <div class="item__txt">
                                    <h3>{{ listing.fields['Title/Topic'] }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </section>

      </section>

  </div>
</template>

<script>
import axios from 'axios';
import Filters from './Filters.vue';
export default {
  name: "Cards",
  components: {Filters},
  data() {
    return {
      listings: [],
      searchQuery: '',
      selectedTopics: [],
      datefilter: 'decending',
      lensFilter: null,
      publicationFilter: null,
      minRange: null,
      maxRange: null,
      slider: {
        startMin: 25,
        startMax: 75,
        min: 0,
        max: 100,
        start: 40,
        step: 1
        }
    };
  },
  computed: {
    filteredListings () {
      let filtered = this.listings;
      if(this.datefilter === 'accending'){
        filtered = filtered.sort((a,b) => {
          return new Date(a.fields['Date Added']) - new Date(b.fields['Date Added']);
        });
      }else if(this.datefilter === 'decending'){
        filtered = filtered.sort((a,b) => {
          return new Date(b.fields['Date Added']) - new Date(a.fields['Date Added']);
        });
      }
      if(this.searchQuery.length > 0) {
        filtered = this.listings.filter(x => x.fields['Title/Topic'].toLowerCase().trim().indexOf(this.searchQuery.toLowerCase().trim()) !== -1);
      }
      if(this.selectedTopics.length > 0) {
        filtered = filtered.filter(x => x.fields.Type && x.fields.Type.some(r => this.selectedTopics.includes(r)));
      }
      if(this.lensFilter !== null) {
        filtered = filtered.filter(x => x.fields['Lens-str'] === this.lensFilter);
      }

      if(this.publicationFilter !== null) {
        filtered = filtered.filter(x => x.fields['Publication'].includes(this.publicationFilter));
      }
      return filtered;
    }
  },
  mounted() {
    this.loadListings();
  },
  methods: {
    searchIt (searchText){
      this.searchQuery = searchText;
    },
    topicSelected (selectedTopics){
      this.selectedTopics = selectedTopics;
    },
    dateFilter (filter) {
      this.datefilter = filter;
    },
    selectLens(lens) {
      this.lensFilter = lens;
    },
    selectPublication(publication) {
      this.publicationFilter = publication;
    },
    loadListings(){
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
    getImageUrl(id){
        if(this.listings[id].fields.Attachment)
            return this.listings[id].fields.Attachment[0].thumbnails.large.url
        else
            return 'https://picsum.photos/600/300/?image=25'
    },
    openListing(id){
        this.$router.push({ name: 'Listing', params: { id: this.listings[id].id }})
    },
    handleScroll (event) {
    let fs = document.querySelector(".content__bottom");
      if (window.scrollY > 10 && !fs.className.includes('sticky')) {
          fs.classList.add('sticky'); 
      } else if (window.scrollY < 10) {
          fs.classList.remove('sticky');
      }
    },
    loadnouislider: function loadnouislider(){
      noUiSlider.create(this.$refs.slider, {
      start: [this.slider.startMin, this.slider.startMax],
      step: this.slider.step,
      range: {
        'min': this.slider.min,
        'max': this.slider.max
      }
      }); 
              
      this.$refs.slider.noUiSlider.on('update',(values, handle) => {
        this[handle ? 'maxRange' : 'minRange'] = parseInt(values[handle]);
      }); 
    },
    updateSlider: function updateSlider() {
      this.$refs.slider.noUiSlider.set([this.minRange, this.maxRange]);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
