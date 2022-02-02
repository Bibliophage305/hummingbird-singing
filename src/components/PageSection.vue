<template>
    <v-row>
        <v-col cols="12">
            <v-sheet class="px-3" :color="background">
                <v-row>
                    <v-col cols="6">
                        <slot name="left"></slot>
                    </v-col>
                    <v-col cols="6">
                        <slot name="right"></slot>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'PageSection',

        props: {
            background: {
                type: String,
                default: "white",
            },
        },

        data: () => ({

        }),

        methods: {
            hexToRGB: (hex, alpha) => {
            let r=parseInt(hex.slice(1, 3), 16), g=parseInt(hex.slice(3, 5), 16), b=parseInt(hex.slice(5, 7), 16);

            if(alpha) {
              return "rgba("+r+", "+g+", "+b+", "+alpha+")";
            } else {
              return "rgb("+r+", "+g+", "+b+")";
            }
          },
        },
    }
</script>

<style scoped>
    .opacity-half {
        opacity: 0.5;
    }
    .opacity-full {
        opacity: 1;
    }
</style>
