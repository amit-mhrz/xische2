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
                          <multiselect v-model="selectedTopics" :options="typeOptions" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Select  Type">
                            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                {{ values.length }} options selected</span>
                            </template>
                          </multiselect>
                      </div>

                      <div class="filter__contentType filter__fade">
                        <ul>
                          <li v-for="(topic, i) in availableTopics" :key="i">
                            <label :for="topic.name" class="check-box"><input type="checkbox" :id="topic.name" :value="topic.value" v-model="selectedTopics">
                            <span class="checkmark"></span> {{topic.name}}</label>
                          </li>
                        </ul>
                      </div>
                  </div>

                  <div class="col-sm-3">
                      <h2>CITY</h2>
                     
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
                                        <select v-model="selectedminYear">
                                            <option v-for="year in years" :value="year" :selected="selectedminYear === year">{{ year }}</option>
                                        </select>
                                        </div>
                                    </li>
                                    <li>
                                        <p>to</p>
                                    </li>
                                    <li>
                                        <div class="select-wrapper">
                                        <select v-model="selectedmaxYear">
                                            <option v-for="year in years" :value="year" :selected="selectedmaxYear === year">{{ year }}</option>
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
      <section class="content__bottom">
         <!-- Range Slider -->
            <section class="section__timeline filter__fade">
                <div class="container">                      
                    <veeno 
                    :handles="[selectedminYear, selectedmaxYear]" 
                    :step = "1"
                    :range = "{ 'min': minYear, 'max': maxYear }"
                    connect
                    :pipsy = "{mode: 'steps', density: 10}"
                    @update = "onDateSlideUpdate"
                    ></veeno>
                </div>
            </section>              
      </section>


  </div>
</template>

<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect';
import veeno from 'veeno'
import { Slide } from 'vue-burger-menu'

export default {
  name: "filters",
  components: {
    Multiselect,
    Slide,
    veeno
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
      availableMinDate: [],
      availableMaxDate: [],
      selectedTopics: [],
      dateFilter: "decending",
      selectedLens: null,
      selectedPublication: null,
      scrolled: false,
      typeOptions: [],
      minYear: 2010,
      maxYear: 2020,
      selectedminYear: 2010,
      selectedmaxYear: 2020

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
      var app_id = "appH81X67TStprrkF";
      var app_key = "key0Uo9OP77Cxoi5c";
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
      var app_id = "appH81X67TStprrkF";
      var app_key = "key0Uo9OP77Cxoi5c";
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
      var app_id = "appH81X67TStprrkF";
      var app_key = "key0Uo9OP77Cxoi5c";
      axios.get(
          "https://api.airtable.com/v0/"+app_id+"/Type",
          {
              headers: { Authorization: "Bearer "+app_key }
          }
      ).then(function(response){
        console.log(response.data.records);
        response.data.records.forEach(element => {
          self.availableTopics.push({name: element.fields.Name, value: element.fields.Name})
          self.typeOptions.push(element.fields.Name)
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
    },
    onDateSlideUpdate(e){
      this.selectedminYear = e.unencoded[0];
      this.selectedmaxYear = e.unencoded[1];
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
      console.log("Type Selected --");
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
    selectedminYear(){
      this.$emit("minYearSelected", this.selectedminYear);
    },
    selectedmaxYear(){
      this.$emit("maxYearSelected", this.selectedmaxYear);
    }
  },
  computed : {
    years () {
      let year = new Date().getFullYear()
      year += 1; 
      return Array.from({length: year - 2009}, (value, index) => 2010 + index)
    }
  }
};
</script>
