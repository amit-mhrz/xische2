<template>
  <div>
       <filters @searched="searchIt" @topicSelected="topicSelected" @dateFilter="dateFilter" @lensSelected="selectLens" @publicationSelected="selectPublication"></filters>

      <section class="content__bottom">
                
                <!-- Range Slider -->
                <section class="section__timeline filter__fade">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="rangeSlider__content">
                                    <div id="rangeSlider" ref="slider">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1599px" height="46.364px" viewBox="0 0 1599 46.364" enable-background="new 0 0 1599 46.364" xml:space="preserve">
                                                <g id="timeline" transform="translate(-158 -0.636)">
                                                    <g id="Lines" transform="translate(177 1.136)">
                                                        <path id="line34" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1469.5,0v5.682"/>
                                                        <path id="line29" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1246.5,0v5.682"/>
                                                        <path id="line24" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1024.5,0v5.682"/>
                                                        <path id="line19" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M801.5,0v5.682"/>
                                                        <path id="line8" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M311.5,0v5.682"/>
                                                        <path id="line13" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M534.5,0v5.682"/>
                                                        <path id="line33" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1425.5,0v5.682"/>
                                                        <path id="line28" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1201.5,0v5.682"/>
                                                        <path id="line23" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M978.5,0v5.682"/>
                                                        <path id="line17" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M712.5,0v5.682"/>
                                                        <path id="line2" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M44.5,0v5.682"/>
                                                        <path id="line7" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M267.5,0v5.682"/>
                                                        <path id="line12" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M490.5,0v5.682"/>
                                                        <path id="line27" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1157.5,0v5.682"/>
                                                        <path id="line22" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M934.5,0v5.682"/>
                                                        <path id="line10" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M400.5,0v5.682"/>
                                                        <path id="line35" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1513.5,0v5.682"/>
                                                        <path id="line30" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1291.5,0v5.682"/>
                                                        <path id="line25" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1068.5,0v5.682"/>
                                                        <path id="line20" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M845.5,0v5.682"/>
                                                        <path id="line4" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M133.5,0v5.682"/>
                                                        <path id="line9" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M356.5,0v5.682"/>
                                                        <path id="line14" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M578.5,0v5.682"/>
                                                        <path id="line32" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1379.5,0v5.682"/>
                                                        <path id="line5" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M177.5,0v5.682"/>
                                                        <path id="line15" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M624.5,0v5.682"/>
                                                        <path id="line31" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1336,0v11.364"/>
                                                        <path id="line16" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M669,0v11.364"/>
                                                        <path id="line36" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1559,0v11.364"/>
                                                        <path id="line26" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1113,0v11.364"/>
                                                        <path id="line11" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M446,0v11.364"/>
                                                        <path id="line6" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M224,0v11.364"/>
                                                        <path id="line1" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M1,0v11.364"/>
                                                        <path id="line21" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M890.5,0v11.364"/>
                                                        <path id="line3" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M89.5,0v5.682"/>
                                                        <path id="line18" fill="none" stroke="#9B9B9B" stroke-linecap="square" stroke-miterlimit="10" d="M757.5,0v5.682"/>
                                                    </g>
                                                    <g id="Dates" transform="translate(158 20)">
                                                        <text transform="matrix(1 0 0 1 7.04 20.0007)" fill="#1D1B23" font-family="'National-Regular'" font-size="12">2000</text>
                                                        <text transform="matrix(1 0 0 1 231.04 20.0007)" fill="#1D1B23" font-family="'National-Regular'" font-size="12">2005</text>
                                                        <text transform="matrix(1 0 0 1 452.04 20.0007)" fill="#1D1B23" font-family="'National-Regular'" font-size="12">2010</text>
                                                        <text transform="matrix(1 0 0 1 1118.04 20.0007)" fill="#1D1B23" font-family="'National-Regular'" font-size="12">2025</text>
                                                        <text transform="matrix(1 0 0 1 896.04 20.0007)" fill="#1D1B23" font-family="'National-Regular'" font-size="12">2020</text>
                                                        <text transform="matrix(1 0 0 1 674.04 20.0007)" fill="#1D1B23" font-family="'National-Regular'" font-size="12">2015</text>
                                                        <text transform="matrix(1 0 0 1 1340.04 20.0007)" fill="#1D1B23" font-family="'National-Regular'" font-size="12">2030</text>
                                                        <text transform="matrix(1 0 0 1 1566.04 20.0007)" fill="#1D1B23" font-family="'National-Regular'" font-size="12">2035</text>
                                                    </g>
                                                </g>
                                                </svg>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
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
                        <div class="row"
                          v-match-heights="{
                              el: ['.item__box', '.item__desc'],  // Array of selectors to fix
                              disabled: []
                            }">
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
    this.loadnouislider()
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
