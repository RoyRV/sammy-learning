<template>
    <div>
        <b-row>
            <b-col>
                <h2>División</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Divisiones Exactas</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="6" md="3">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="exactDivision[0]" :max="50" />
                                                </b-col>
                                            </b-row>
                                            <b-row class="mb-4">
                                                <b-col>
                                                    <span>Tengo {{exactDivision[0]}}
                                                        manzana{{exactDivision[0]==1?'':'s'}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="6" md="3">
                                            <div>
                                                <img :src="'/assets/division.svg'" style="max-width: 50px;" />
                                            </div>
                                        </b-col>
                                        <b-col cols="6" md="3">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="exactDivision[1]" :max="50" :min="1" />
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>Debo repartirlas entre {{exactDivision[1]}}
                                                        persona{{exactDivision[1]==1?'':'s'}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col>
                                            <div>
                                                <img :src="'/assets/equal.svg'" style="max-width: 50px;" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row class="mt-4">
                                        <b-col>
                                            <b-row >
                                                <b-col>
                                                    <div style="margin:0 10px">
                                                        <h4>Le tocaria a cada uno {{exactQuotient}}</h4>
                                                        <div v-if="exactDivision[0]<exactDivision[1]">
                                                            <div style="display: inline-block;">
                                                                <FigureComponent v-bind:number="exactQuotient" />
                                                            </div>
                                                        </div>
                                                        <div v-else>
                                                            <div style="display: inline-block;"
                                                                v-for="(number,index) in exactDivision[1]"
                                                                :key="number">
                                                                <span>Persona {{index+1}}</span>
                                                                <FigureComponent v-bind:number="exactQuotient" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </b-col>
                                                <b-col cols="1" v-if="exactResidue">
                                                    <h4>Y</h4>
                                                </b-col>
                                                <b-col cols="5" v-if="exactResidue">
                                                    <div>
                                                        <h4>Me sobrarian {{exactResidue}} (Residuo)</h4>
                                                        <FigureComponent v-bind:number="exactResidue" />
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Divisiones Inexactas</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="6" md="3">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="inexactDivision[0]" :max="50" />
                                                </b-col>
                                            </b-row>
                                            <b-row class="mb-4">
                                                <b-col>
                                                    <span>Tengo {{inexactDivision[0]}}
                                                        manzana{{inexactDivision[0]==1?'':'s'}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="6" md="3">
                                            <div>
                                                <img :src="'/assets/division.svg'" style="max-width: 50px;" />
                                            </div>
                                        </b-col>
                                        <b-col cols="6" md="3">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="inexactDivision[1]" :max="50" :min="1" />
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>Debo repartirlas entre {{inexactDivision[1]}}
                                                        persona{{inexactDivision[1]==1?'':'s'}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col>
                                            <div>
                                                <img :src="'/assets/equal.svg'" style="max-width: 50px;" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row>
                                        <b-col id="inexactResult">
                                            <span>{{inexactDivision[0]}} / {{inexactDivision[1]}}</span>
                                            <span> {{isInexactResult?"≈":"="}} </span>
                                            <span>{{inexactResult.toFixed(2)}}</span>
                                            <b-tooltip target="inexactResult" :title="inexactResultDesc" />
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
    import FigureComponent from '@/components/figureComponent.vue';
    export default {
        name: 'Division',
        components: { FigureComponent },
        data() {
            return {
                exactDivision: [6, 3],
                inexactDivision: [10, 3]
            }
        },
        computed: {
            exactQuotient() {
                return Math.floor(this.exactDivision[0] / this.exactDivision[1]);
            },
            exactResidue() {
                return (this.exactDivision[0] % this.exactDivision[1]);
            },
            inexactResult() {
                return (this.inexactDivision[0] / this.inexactDivision[1])
            },
            isInexactResult() {
                let result = this.inexactResult;
                let decimals = this.countDecimals(result);
                return decimals > 2;
            },
            inexactResultDesc() {
                return this.isInexactResult ? 'Es una división exacta'
                    : 'Es una división inexacta, el resultado es un valor apróximado';
            }
        },
        methods: {
            countDecimals(number) {
                if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
                return number.toString().split(".")[1].length || 0;
            }
        },
    }
</script>
<style scoped>
    hr {
        border-top-width: 10px;
    }
</style>