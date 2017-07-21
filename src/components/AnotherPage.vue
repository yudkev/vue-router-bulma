<template>
    <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title" v-on:click="showModal = !showModal">
                Click to launch sample modal
              </h1>
              <h2 class="subtitle">
                With sample active links
              </h2>
            </div>
          </div>
        </section>

        <div class="modal" :class="{active:showModal}">
            <div class="modal-background" v-on:click="showModal = !showModal"></div>
                <div class="modal-card">
                    <header class="modal-card-head has-text-left">
                        <p class="modal-card-title">Modal</p>
                        <button class="delete" v-on:click="showModal = !showModal"></button>
                    </header>
                <section class="modal-card-body">
                    <div class="tabs">
                      <ul>
                        <li :class="{active: isActive('about') }"><a v-on:click="setActive('about')">About</a></li>
                        <li :class="{ active:isActive('screenshots') }"><a v-on:click="setActive('screenshots')">Screenshots</a></li>
                      </ul>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="card-image" v-if="isActive('screenshots')">
                                <figure class="image is-4by3">
                                    <img src="http://via.placeholder.com/480x320">
                                </figure>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card-image" v-if="isActive('screenshots')">
                                <figure class="image is-4by3">
                                    <img src="http://via.placeholder.com/480x320">
                                </figure>
                            </div>
                        </div>
                         <div class="column">
                            <div class="card-image" v-if="isActive('screenshots')">
                                <figure class="image is-4by3">
                                    <img src="http://via.placeholder.com/480x320">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-two-thirds">
                            <section class="content has-text-left" v-if="isActive('about')">
                                <h2 class="detail">Section</h2>
                                <p>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                </p><p>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                                </p><p>
                                    Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return { 
        activeItem: 'about',
        showModal: false
    }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>