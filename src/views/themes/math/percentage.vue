<template>
    <div>
        <b-row>
            <b-col>
                <h2>Porcentajes</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Porcentaje simple</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="5">
                                            <b-row>
                                                <b-col>
                                                    <span>{{simplePercentageValue}} % </span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="simplePercentageValue" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col class="mt-3">
                                            <span>de</span>
                                        </b-col>
                                        <b-col cols="12" md="5">
                                            <b-row>
                                                <b-col>
                                                    <span>{{simplePercentageOf}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="simplePercentageOf" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row>
                                        <b-col>
                                            <div class="row">
                                                <div class="percentageProp">
                                                    <FractionComponent :numerator="simplePercentageValue"
                                                        :denominator="100">
                                                    </FractionComponent>
                                                </div>
                                                <div class="percentageProp">
                                                    <span>x</span>
                                                </div>
                                                <div class="percentageProp">
                                                    <span>{{simplePercentageOf}}</span>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div class="row">
                                                <div class="percentageProp">
                                                    <span>=</span>
                                                </div>
                                                <div class="percentageProp">
                                                    <FractionComponent :numerator="simplePercentageNumerator"
                                                        :denominator="100">
                                                    </FractionComponent>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div class="row percentageResult">
                                                <div class="percentageProp">
                                                    <span>ó</span>
                                                </div>
                                                <div class="percentageProp">
                                                    <span>{{simplePercentageResult}}</span>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Porcentaje Compuesto</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <span>{{mixedPercentageValues[0]}} % de</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="mixedPercentageValues[0]" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <span>{{mixedPercentageOf}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="mixedPercentageOf" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <hr />
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
    import FractionComponent from '@/components/fractionComponent.vue';
    export default {
        name: 'Percentage',
        components: { FractionComponent, },
        data() {
            return {
                simplePercentageValue: 1,
                simplePercentageOf: 10,
                mixedPercentageValues: [
                    10
                ],
                mixedPercentageOf: 100
            }
        },
        computed: {
            simplePercentageNumerator() {
                return this.simplePercentageValue * this.simplePercentageOf;
            },
            simplePercentageResult() {
                return this.simplePercentageValue * this.simplePercentageOf / 100;
            },
        },
    }
</script>
<style scoped>
    hr {
        border-top-width: 10px;
    }

    .percentageProp {
        flex-basis: 0;
        flex-grow: 1;
        min-width: 0;
        max-width: 100%;
        display: inline-grid;
        align-content: center;
    }

    .percentageResult {
        height: 100%;
    }
</style>