<template>
    <div>
        <b-row>
            <b-col>
                <h2>Raíces</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Raices Cuadradas</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col>
                                            <vue-slider v-model="number" :data="data" :marks="true" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-5">
                                        <b-col>
                                            <span>Radicando : {{number}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <span>Se lee: raíz cuadrada(indice 2) de {{number}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <span>Es {{result}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <span>Porque {{result}} x {{result}} = {{number}}</span>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'Square',
        data() {
            return {
                number: 0,
                data: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
            }
        },
        computed: {
            result() {
                return Math.sqrt(this.number, 2)
            }
        }
    }
</script>