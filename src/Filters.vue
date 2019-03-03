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
                    <div class="header__search">
                        <div class="form-group">
                            <span class="icon icon-search"></span>
                             <b-form-input
                             type="text"
                                v-model="searchText"
                                placeholder="Search...">
                            </b-form-input>
                           
                        </div>
                    </div>
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

      <section class="section__filter">
          <div class="container">
              <div class="row">
                  <div class="col-sm-3">
                      <h2>CONTENT TYPE</h2>
                     
                      <div class="filter__contentType filter__sticky">
                          <multiselect v-model="selectedTopics" :options="availableTopics" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Select  Type" label="name" track-by="name" @change="addThing(thing)">
                            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                {{ values.length }} options selected</span>
                            </template>
                          </multiselect>
                          <pre class="language-json"><code>{{ selectedTopics }}</code></pre>
                      </div>

                      <div class="filter__contentType filter__fade">
                        <ul>
                          <li v-for="(topic, i) in availableTopics" :key="i">
                            <input type="checkbox" :id="topic.name" :value="topic.value" v-model="selectedTopics">
                            <label :for="topic.name">{{topic.name}}</label>
                          </li>
                        </ul>
                      </div>
                  </div>

                  <div class="col-sm-3">
                      <h2>CONTENT TYPE</h2>
                     
                      <div class="filter__city filter__sticky">
                         <div class="select-wrapper">
                          <select>
                              <option>London</option>
                              <option>London</option>
                              <option>Toronto</option>
                          </select>
                          </div>
                      </div>
                      <div class="filter__city filter__fade">
                          <ul>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  New York</label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  London</label></li>
                              <li><label class="check-box"><input type="checkbox"> <span class="checkmark"></span>  Toronto</label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  Vancouver</label></li>
                              <li><label class="check-box"><input type="checkbox"> <span class="checkmark"></span> Tokyo</label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  Vienna</label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  Stockholm</label></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-3">
                      <h2>FOCUS AREA</h2>
                    
                      <div class="filter__city filter__sticky">
                             <div class="select-wrapper">
                              <select>
                                  <option>Financial</option>
                                  <option>London</option>
                                  <option>Toronto</option>
                              </select>
                              </div>
                      </div>
                      <div class="filter__area filter__fade">
                          <ul>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span> Lifestyle </label></li>
                              <li><label class="check-box"><input type="checkbox"> <span class="checkmark"></span> Financial </label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  Workforce </label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  Government </label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  Transportation </label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  Environment</label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span>  Infrastructure</label></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-3">
                      <h2>IMPACT</h2>
                    
                      <div class="filter__area filter__sticky">
                              <div class="select-wrapper">
                              <select>
                                  <option>Services</option>
                                  <option>London</option>
                                  <option>Toronto</option>
                              </select>
                              </div>
                      </div>
                      <div class="filter__area filter__fade ">
                          <ul>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span> Services</label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span> Infrastructure</label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span> Security</label></li>
                              <li><label class="check-box"><input type="checkbox"><span class="checkmark"></span> Experiences</label></li>
                          </ul>
                      </div>
                  </div>
                  
                  <div class="col-sm-3 filter__sticky">
                      <h2>DATE RANGE</h2>
                      <div class="filter__date">
                          <div class="row">
                                  <div class="col-sm-12">
                                      <ul>
                                          <li>
                                              <div class="select-wrapper">
                                              <select>
                                                  <option>2005</option>
                                                  <option>2006</option>
                                                  <option>2007</option>
                                              </select>
                                              </div>
                                          </li>
                                          <li>
                                              <p>to</p>
                                          </li>
                                          <li>
                                              <div class="select-wrapper">
                                              <select>
                                                  <option>2005</option>
                                                  <option>2006</option>
                                                  <option>2007</option>
                                              </select>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Range Slider -->


  </div>
</template>

<script>
import axios from 'axios';
import VueMatchHeights from 'vue-match-heights'
import Multiselect from 'vue-multiselect';
import 'vue-nouislider/dist/vue-nouislider.css'
import { Slide } from 'vue-burger-menu'
import VueNouislider from 'vue-nouislider/dist/vue-nouislider.common'
export default {
  name: "filters",
  components: {
    Multiselect,
    Slide
  },
  data() {
    return {
      searchText: "",
      availableTopics: [],
      availableLens: [
        { value: null, text: 'Please select a lense' },
      ],
      availablePublications: [
        { value: null, text: 'Please select a publication' },
      ],
      selectedTopics: [],
      dateFilter: "decending",
      selectedLens: null,
      selectedPublication: null,
      scrolled: false
    };
  },
  mounted() {
    this.getLenses();
    this.getPublications();
    this.getTypes();
  },
  methods: {
    getLenses(){
      var self = this;
      var app_id = "app838WoUK7gksAto";
      var app_key = "key4hPsF3lTzceL6g";
      axios.get(
          "https://api.airtable.com/v0/"+app_id+"/Lenses",
          {
              headers: { Authorization: "Bearer "+app_key }
          }
      ).then(function(response){
        response.data.records.forEach(element => {
          self.availableLens.push({text: element.fields.Name, value: element.fields.Name})
        });
      }).catch(function(error){
        console.log(error)
      });
    },
    getPublications(){
      var self = this;
      var app_id = "app838WoUK7gksAto";
      var app_key = "key4hPsF3lTzceL6g";
      axios.get(
          "https://api.airtable.com/v0/"+app_id+"/Sources",
          {
              headers: { Authorization: "Bearer "+app_key }
          }
      ).then(function(response){
        console.log(response.data.records);
        response.data.records.forEach(element => {
          self.availablePublications.push({text: element.fields.Name, value: element.id})
        });
      }).catch(function(error){
        console.log(error)
      });
    },
    getTypes(){
      var self = this;
      var app_id = "app838WoUK7gksAto";
      var app_key = "key4hPsF3lTzceL6g";
      axios.get(
          "https://api.airtable.com/v0/"+app_id+"/Type",
          {
              headers: { Authorization: "Bearer "+app_key }
          }
      ).then(function(response){
        console.log(response.data.records);
        response.data.records.forEach(element => {
          self.availableTopics.push({name: element.fields.Name, value: element.fields.Name})
        });
      }).catch(function(error){
        console.log(error)
      });
    },
    handleScroll (event) {
    let fs = document.querySelector(".section__filter");
      if (window.scrollY > 10 && !fs.className.includes('sticky')) {
          fs.classList.add('sticky'); 
      } else if (window.scrollY < 10) {
          fs.classList.remove('sticky');
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    searchText() {
      this.$emit("searched", this.searchText);
    },
    selectedTopics() {
      this.$emit("topicSelected", this.selectedTopics);
    },
    dateFilter() {
      this.$emit("dateFilter", this.dateFilter);
    },
    selectedLens() {
      this.$emit("lensSelected", this.selectedLens);
    },
    selectedPublication() {
      this.$emit("publicationSelected", this.selectedPublication);
    },
  }
};
</script>
