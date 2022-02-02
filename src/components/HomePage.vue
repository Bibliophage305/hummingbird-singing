<template>
  <v-container fluid class="pa-0 ma-0">
    <title-section
      showContactButton
      subheading="Lorem ipsum dolor sit amet"
    />

    <page-section background="secondary">
      <template v-slot:left>
        <v-img
          :src="require('../assets/images/child-singing.png')"
          class="mx-auto"
          height="300"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
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
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </template>
      <template v-slot:left>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus suscipit, a quam blanditiis ab molestias animi veniam, magnam aperiam vel explicabo reiciendis nulla asperiores eos modi cupiditate excepturi, totam dolores!
        </p>
      </template>
    </page-section>

    <page-section background="secondary">
      <template v-slot:left>
        <v-img
          :src="require('../assets/images/deanna-singing.png')"
          class="mx-auto"
          height="300"
          position="center 25%"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </template>
      <template v-slot:right>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus suscipit, a quam blanditiis ab molestias animi veniam, magnam aperiam vel explicabo reiciendis nulla asperiores eos modi cupiditate excepturi, totam dolores!
        </p>
      </template>
    </page-section>
  </v-container>
</template>

<script>
  import PageSection from './PageSection'
  import TitleSection from './TitleSection'
  export default {
  components: { PageSection, TitleSection },
    name: 'HomePage',

    data: () => ({
    }),
  }
</script>
