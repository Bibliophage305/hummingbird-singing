import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

// Fonts are 
// Reason new and BDSans

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ebb383',
                secondary: '#2b499c',
                accent: '#ca4f84',
                neutral: '#a0a0b5',
            },
        },
    },
});
