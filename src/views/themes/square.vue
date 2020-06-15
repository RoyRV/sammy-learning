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
                                            <vue-slider v-model="squareNumber" :data="squareData" :marks="true" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-5">
                                        <b-col>
                                            <span>Radicando : {{squareNumber}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <span>Se lee: raíz cuadrada(indice 2) de {{squareNumber}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <span>Se expresa </span><sup>2</sup><span>√</span><span
                                                style="border-top:1px solid">{{squareNumber}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <span>Es {{squareResult}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <p>El resultado es {{squareResult}} </p>
                                            <p>Porque {{squareResult}} x {{squareResult}} = {{squareNumber}}</p>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Raices Cubicas</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col>
                                            <vue-slider v-model="cubicNumber" :data="cubicData" :marks="true" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-5">
                                        <b-col>
                                            <span>Radicando : {{cubicNumber}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <span>Se lee: raíz cuadrada(indice 3) de {{cubicNumber}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <span>Se expresa </span><sup>3</sup><span>√</span><span
                                                style="border-top:1px solid">{{cubicNumber}}</span>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col>
                                            <p>El resultado es {{cubicResult}} </p>
                                            <p>Porque {{cubicResult}} x {{cubicResult}} x {{cubicResult}} =
                                                {{cubicNumber}}</p>
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
                squareNumber: 0,
                squareData: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
                cubicNumber: 0,
                cubicData: [0, 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000],
            }
        },
        computed: {
            squareResult() {
                return Math.sqrt(this.squareNumber, 2)
            },
            cubicResult() {
                return Math.ceil(Math.pow(this.cubicNumber, 1 / 3))
            }
        }
    }
</script>