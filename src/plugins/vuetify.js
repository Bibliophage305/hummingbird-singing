import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#2b499c',
                secondary: '#ebb383',
                accent: '#ca4f84',
                neutral: '#a0a0b5',
            },
        },
    },
});
