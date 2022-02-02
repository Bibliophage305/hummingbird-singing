<template>
    <v-row class="text-center" justify="center">
        <v-col cols="12" md="8" class="px-5">
            <form action="https://formsubmit.co/5caf50cfd9977d43ce995e96fe066076" method="POST">
                <input type="hidden" name="_next" :value="successUrl">
                <input type="hidden" name="_subject" value="Hummingbird Singing Contact Form">
                <input type="text" name="_honey" style="display:none">
                <input type="hidden" name="_autoresponse" value="Thanks for contacting Hummingbird Singing, we'll get back to you soon!">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            label="Name"
                            name="name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            name="email"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                            v-model="message"
                            label="Message"
                            name="message"
                            rows="2"
                            hint="Lorem ipsum dolor et amet"
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row justify>
                    <v-col></v-col>
                    <v-btn
                        class="mr-4"
                        type="submit"
                        color="accent"
                        :disabled="$v.$invalid"
                    >
                        Submit
                    </v-btn>
                </v-row>
            </form>
        </v-col>
        <v-alert
            :value="showSuccessAlert"
            color="secondary"
            class="mb-3 px-5"
        >
            <span class="body-2">
                Thank you for your message! We will get back to you as soon as possible.
            </span>
        </v-alert>
    </v-row>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        name: 'ContactForm',

        mixins: [validationMixin],

        validations: {
            name: { required },
            email: { required, email },
        },

        data: () => ({
            name: '',
            email: '',
            message: '',
        }),

        computed: {
            nameErrors() {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('Name is required.')
                return errors
            },

            emailErrors() {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            },

            successUrl() {
                let url = new URL(window.location.origin + this.$router.currentRoute.fullPath);
                url.searchParams.set('success', true);
                return url;
            },

            showSuccessAlert() {
                return this.$route.query.success === 'true';
            },
        },
    }
</script>
