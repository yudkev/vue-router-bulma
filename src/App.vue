<template>
  <div id="app">
    <div class="main-content">
        <nav class="nav">
            <div class="container">
                <div class="nav-left is-hidden-tablet" v-bind:class="[isMobile ? activeClass : '']">
                    <a href="#" class="nav-item is-hidden-tablet">
                        <span class="icon is-medium"><i class="fa fa-linkedin"></i></span>
                    </a>
                    <a href="#" class="nav-item is-hidden-tablet">
                        <span class="icon is-medium"><i class="fa fa-codepen"></i></span>
                    </a>
                    <a href="#" class="nav-item is-hidden-tablet">
                        <span class="icon is-medium"><i class="fa fa-instagram"></i></span>
                    </a>
                </div>

              <div class="nav-left">
                <router-link class="nav-item is-tab is-hidden-mobile" to="/" exact>Home</router-link>
                <router-link class="nav-item is-tab is-hidden-mobile" to="/page" exact>Page</router-link>
                <router-link class="nav-item is-tab is-hidden-mobile" to="/another-page" exact>Another Page</router-link>
              </div>

            <span class="nav-toggle" v-bind:class="[isMobile ? activeClass : '']" v-on:click="isMobile = !isMobile">
                <span></span>
                <span></span>
                <span></span>
            </span>

            <div class="nav-right nav-menu" v-bind:class="[isMobile ? activeClass : '']">
                <router-link class="nav-item is-tab is-hidden-tablet" to="/" exact>Home</router-link>
                <router-link class="nav-item is-tab is-hidden-tablet" to="/page" exact>Page</router-link>
                <router-link class="nav-item is-tab is-hidden-tablet" to="/another-page" exact>Another Page</router-link>
            
                <div class="nav-right">
                    <a class="nav-item is-hidden-mobile" href="#" target="_blank">
                        <span class="icon is-medium"><i class="fa fa-linkedin fa-3x"></i></span>
                    </a>
                    <a class="nav-item is-hidden-mobile" href="#" target="_blank">
                        <span class="icon is-medium"><i class="fa fa-codepen fa-3x"></i></span>
                    </a>
                    <a class="nav-item is-hidden-mobile" href="#" target="_blank">
                        <span class="icon is-medium"><i class="fa fa-instagram"></i></span>
                    </a>
                </div>
            </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  name: 'footer',
    data() {
      return { 
        isMobile: false,
        activeClass: 'is-active'
    }
  }
}
</script>
<style src="./assets/bulma.sass" lang="sass"></style>
<style>
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

