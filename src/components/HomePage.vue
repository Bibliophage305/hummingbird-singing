<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logos/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 mb-3 secondary--text">
          HUMMINGBIRD SINGING
        </h1>

        <p class="subheading font-weight-regular">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit magnam ad minima consectetur voluptates sapiente, quas minus nam alias iusto adipisci laudantium, illo dolorum maxime reiciendis ex modi rem?
        </p>

        <v-btn
          class="mb-2"
          color="accent"
          dark
          to="/contact"
        >Contact Us</v-btn>

      </v-col>

      <page-section background="primary">
        <template v-slot:left>
          <v-img
            :src="require('../assets/images/child-singing.png')"
            class="mx-auto"
            height="300"
          />
        </template>
        <template v-slot:right>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus suscipit, a quam blanditiis ab molestias animi veniam, magnam aperiam vel explicabo reiciendis nulla asperiores eos modi cupiditate excepturi, totam dolores!
          </p>
        </template>
      </page-section>

      <page-section background="white">
        <template v-slot:right>
          <v-img
            :src="require('../assets/images/children-singing.png')"
            class="mx-auto"
            height="300"
          />
        </template>
        <template v-slot:left>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus suscipit, a quam blanditiis ab molestias animi veniam, magnam aperiam vel explicabo reiciendis nulla asperiores eos modi cupiditate excepturi, totam dolores!
          </p>
        </template>
      </page-section>

      <page-section background="primary">
        <template v-slot:left>
          <v-img
            :src="require('../assets/images/deanna-singing.png')"
            class="mx-auto"
            height="300"
            position="center 25%"
          />
        </template>
        <template v-slot:right>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus suscipit, a quam blanditiis ab molestias animi veniam, magnam aperiam vel explicabo reiciendis nulla asperiores eos modi cupiditate excepturi, totam dolores!
          </p>
        </template>
      </page-section>
    </v-row>
  </v-container>
</template>

<script>
  import PageSection from './PageSection'
  export default {
  components: { PageSection },
    name: 'HomePage',

    data: () => ({
    }),
  }
</script>
