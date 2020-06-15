<template>
    <div>
        <b-row>
            <b-col>
                <h2>Raíces</h2>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col cols="12" md="6">
                <b-row>
                    <b-col>
                        <vue-slider v-model="number" :max="10" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span>Base : {{number}}</span>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" md="6">
                <b-row>
                    <b-col>
                        <vue-slider v-model="squareFactor" :max="6" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span>Raíz {{squareFactor}}</span>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'Square',
        data() {
            return {
                number: 2,
                squareFactor: 2
            }
        },
        computed: {
            value() {
                return 1;
            }
        }
    }
</script>