<template>
    <v-row class="text-center" justify="center">
        <v-col cols="12">
            <v-img
                :src="require('../assets/logos/logo.png')"
                class="my-3"
                contain
                height="200"
            />
        </v-col>

        <v-col class="mb-4" cols="12" md="8">
            <h1 class="display-2 mb-3 primary--text">
                HUMMINGBIRD SINGING
            </h1>

            <p class="subheading font-weight-regular">
                {{ subheading }}
            </p>

            <v-btn
                v-if="showContactButton"
                class="mb-2"
                color="accent"
                dark
                to="/contact"
            >Contact Us</v-btn>

        </v-col>
    </v-row>
</template>

<script>
  export default {
    name: 'TitleSection',

    props: {
        subheading: {
            type: String,
            default: "",
        },
        showContactButton: {
            type: Boolean,
            default: false,
        },
    },
  }
</script>
