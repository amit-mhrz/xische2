<template>
  <div>
       <filters @searched="searchIt" @topicSelected="topicSelected" @dateFilter="dateFilter" @lensSelected="selectLens" @publicationSelected="selectPublication" @minYearSelected="selectMinYear" @maxYearSelected="selectMaxYear"></filters>

      <section class="result_count">
                
          <!-- Filters Applied -->
          <section class="section__appliedFilters">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-4">
                          <div class="showing">
                              <p><span>{{ listingCount }}</span> Results</p>
                          </div>
                      </div>
                      <div class="col-sm-8">
                          <div class="appliedFilters">

                              <ul>
                                  <li v-for="(selcitem, i) in selectedTopics" :key="i">
                                    <a href="#">{{ selcitem }}<span class="icon icon-close" v-on:click="removeSelectedType(i)"><img src="/src/assets/img/close.png" alt=""></span></a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <!-- Products -->
          <section class="section__products">
              <div class="container">
                  <div class="row" v-match-heights="{el: ['.item__box']}">

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
      filterlistings: [],
      searchQuery: '',
      selectedTopics: [],
      datefilter: 'decending',
      lensFilter: null,
      publicationFilter: null,
      minRange: null,
      maxRange: null,
      listingCount: 0,
      minYear: null,
      maxYear: null
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

      if( this.minYear !== null ){
        filtered = filtered.filter(x =>
                   (new Date(x.fields['Date Added']).getFullYear())  >= (this.minYear)
            );
      }

      if( this.maxYear !== null ){
        filtered = filtered.filter(x =>
                   (new Date(x.fields['Date Added']).getFullYear())  <= (this.maxYear)
            );
      }

      this.listingCount = filtered.length;
      this.filterlistings = filtered;
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
    selectMinYear(minYear){
      this.minYear = minYear;
    },
    selectMaxYear(maxYear){
      this.maxYear = maxYear;
    },
    loadListings(){
      var self = this;
      var app_id = "appH81X67TStprrkF";
      var app_key = "key0Uo9OP77Cxoi5c";
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
        if(this.filterlistings[id].fields.Attachment)
            return this.filterlistings[id].fields.Attachment[0].thumbnails.large.url
        else
            return 'https://picsum.photos/600/300/?image=25'
    },
    openListing(id){
        this.$router.push({ name: 'Listing', params: { id: this.filterlistings[id].id }})
    },
    handleScroll (event) {
    let fs = document.querySelector(".content__bottom");
      if (window.scrollY > 10 && !fs.className.includes('sticky')) {
          fs.classList.add('sticky'); 
      } else if (window.scrollY < 10) {
          fs.classList.remove('sticky');
      }
    },
    removeSelectedType(typeIndex){
      this.selectedTopics.splice(typeIndex, 1);
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
