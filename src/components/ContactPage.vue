<template>
  <v-container fluid class="pa-0 ma-0">
    <title-section
        subheading="Contact Us!"
    />

    <contact-form />
  </v-container>
</template>

<script>
    import TitleSection from '../components/TitleSection'
import ContactForm from './ContactForm'
  export default {
    components: { TitleSection, ContactForm },
    name: 'ContactPage',

    data: () => ({
    }),
  }
</script>
