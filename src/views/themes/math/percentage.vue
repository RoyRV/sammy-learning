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
                                                    <FractionComponent id="simplePercentageValue"
                                                        :numerator="simplePercentageValue" :denominator="100">
                                                    </FractionComponent>
                                                    <b-tooltip target="simplePercentageValue"
                                                        :title="simplePercentageValueDesc" />
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
                                            <draggable v-model="mixedPercentageValues">
                                                <div v-for="(value, index) in mixedPercentageValues" :key="index"
                                                    class="draggablePercentage">
                                                    <b-row>
                                                        <b-col>
                                                            <b-icon :id="'mixedPercentageValues' + index"
                                                                icon="arrows-move" class="movePercentage"></b-icon>
                                                            <span>{{mixedPercentageValues[index]}} % de</span>
                                                            <span>{{index==mixedPercentageValues.length-1?'':'l'}}</span>
                                                            <b-icon icon="plus-circle"
                                                                class="removePercentage right ml-2"
                                                                @click="addMixedPercentageValue">
                                                            </b-icon>
                                                            <b-icon v-if="mixedPercentageValues.length>1" icon="trash"
                                                                class="removePercentage"
                                                                @click="removePercentage(index)"></b-icon>
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="mixedPercentageValues[index]" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-tooltip v-if="mixedPercentageValues.length>1"
                                                        :target="'mixedPercentageValues' + index"
                                                        title="Puedes cambiar el orden, solo arrastrame arriba o abajo" />
                                                </div>
                                            </draggable>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <div>
                                                <b-row>
                                                    <b-col>
                                                        <span>Número : {{mixedPercentageOf}}</span>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col>
                                                        <vue-slider v-model="mixedPercentageOf" />
                                                    </b-col>
                                                </b-row>
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row>
                                        <b-col>
                                            <div class="row">
                                                <div v-for="(value, index) in mixedPercentageValues" :key="index"
                                                    class="mixedPercentageContainer"
                                                    v-bind:style="{ width: 100/mixedPercentageValues.length + '%' }">
                                                    <div class="percentageProp" :id="'mixedFractionValue_' + index">
                                                        <FractionComponent :numerator="value" :denominator="100">
                                                        </FractionComponent>
                                                        <b-tooltip :target="'mixedFractionValue_' + index"
                                                            :title="'ó '+(value/100).toFixed(2)" />
                                                    </div>
                                                    <div class="percentageProp">
                                                        <span v-if="index!=mixedPercentageValues.length-1">x</span>
                                                        <span v-else>=</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div class="mixedPercentageResult">
                                                <span>Resultado : {{mixedPercentageResult}}</span>
                                            </div>
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
    import draggable from 'vuedraggable'
    import FractionComponent from '@/components/fractionComponent.vue';
    import { mathHelper } from '@/helpers';
    export default {
        name: 'Percentage',
        components: { FractionComponent, draggable },
        data() {
            return {
                simplePercentageValue: 1,
                simplePercentageOf: 10,
                mixedPercentageValues: [
                    10, 20, 30
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
            simplePercentageValueDesc() {
                let value = (this.simplePercentageValue / 100).toFixed(2);
                return "ó también " + value;
            },
            mixedPercentageResult() {
                let percentageResult = 1;
                this.mixedPercentageValues.forEach(val => {
                    percentageResult = percentageResult * val / 100;
                });
                let result = percentageResult * this.mixedPercentageOf;
                return result.toFixed(2);
            }
        },
        methods: {
            removePercentage(index) {
                this.mixedPercentageValues.splice(index, 1);
            },
            addMixedPercentageValue() {
                this.mixedPercentageValues.push(mathHelper.getRandomNumber());
            }
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

    .draggablePercentage {
        border: 1px solid #ced4da;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        background-color: white;
    }

    .mixedPercentageContainer {
        display: flex;
    }

    .movePercentage {
        height: 100%;
        float: left;
    }

    .removePercentage {
        height: 100%;
        float: right;
    }

    .mixedPercentageResult {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
</style>