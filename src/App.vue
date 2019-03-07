  <template>
    <div id="app">
      <div class="wrapper">
            
        <router-view></router-view>

      </div>
      <footer>
          <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <ul>
                        <li><a href="#"> Terms of Use </a></li>
                        <li><a href="#">  Documentation & Support</a></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="copyrights">
                        <p>Copyright © Xische & Co. {{ new Date().getFullYear() }}</p>
                    </div>
                </div>
            </div>
          </div>
      </footer>
    </div>
  </template>

  <script>
      export default {
        name: "app",
        data() {
          return {
          };
        }
      };
  </script>

  <style lang="css">
      @import '/src/assets/dist/css/style.css';
      @import 'https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css';
      @import '/src/assets/css/nouislider.min.css';
      @import '/src/assets/css/custom.css';

      #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
  </style>