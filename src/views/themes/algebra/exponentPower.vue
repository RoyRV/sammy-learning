<template>
    <div>
        <b-row>
            <b-col>
                <h2>Teoría de Exponentes</h2>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col>
                <div role="tablist">
                    <!--Sum-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Multiplicación de bases iguales
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="4" class="mb-2">
                                            <p>Cuando tienen bases iguales, los exponentes se suman</p>
                                            <span class="description">a</span>
                                            <sup class="expo">m</sup>
                                            <span> x </span>
                                            <span class="description">a</span>
                                            <sup class="expo">n</sup>
                                            <span> = </span>
                                            <span class="description">a</span>
                                            <sup class="expo">m+n</sup>
                                        </b-col>
                                        <b-col cols="12" md="8" class="mt-2">
                                            <b-row>
                                                <b-col>
                                                    <p style="text-align: left;">Ejemplo</p>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseSumExpo1" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente m : {{sameBaseSumExpo1}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseSumExpo2" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente n : {{sameBaseSumExpo2}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>
                                                        <span class="description">a</span>
                                                        <sup class="expo">{{sameBaseSumExpo1}}</sup>
                                                        <span> x </span>
                                                        <span class="description">a</span>
                                                        <sup class="expo">{{sameBaseSumExpo2}}</sup>

                                                    </span>
                                                    <span> = </span>
                                                    <span>
                                                        <span class="description">a</span>
                                                        <sup id="sumExpoSolution" class="expo">{{sameBaseSumExpo1}}
                                                            + {{sameBaseSumExpo2}}</sup>
                                                    </span>
                                                    <b-tooltip target="sumExpoSolution" :title="sumExpoSolutionDesc" />
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">{{sameBaseSumExpo1 + sameBaseSumExpo2}}</sup>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!--Substraction-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">División de bases iguales
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="4" class="mb-2">
                                            <b-row>
                                                <b-col>
                                                    <p>Cuando tienen bases iguales, los exponentes se restan</p>
                                                    <span class="description">a</span>
                                                    <sup class="expo">m</sup>
                                                    <span> / </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">n</sup>
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">m-n</sup>
                                                </b-col>
                                            </b-row>
                                            <b-row class="mt-2">
                                                <b-col>
                                                    <b-icon id="divisionExpoRestriction" icon="info-circle" scale="0.75"
                                                        shift-v="0.75" aria-hidden="true"></b-icon>
                                                    <b-tooltip target="divisionExpoRestriction"
                                                        title="Esta condición siempre y cuando a sea diferente de 0">
                                                    </b-tooltip>
                                                    <span>Para a ≠0</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="8" class="mt-2">
                                            <b-row>
                                                <b-col>
                                                    <p style="text-align: left;">Ejemplo</p>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseLessExpo1" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente m : {{sameBaseLessExpo1}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseLessExpo2" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente n : {{sameBaseLessExpo2}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>
                                                        <span class="description">a</span>
                                                        <sup class="expo">{{sameBaseLessExpo1}}</sup>
                                                        <span> / </span>
                                                        <span class="description">a</span>
                                                        <sup class="expo">{{sameBaseLessExpo2}}</sup>

                                                    </span>
                                                    <span> = </span>
                                                    <span>
                                                        <span class="description">a</span>
                                                        <sup id="divisionExpoSolution"
                                                            class="expo">{{sameBaseLessExpo1}}
                                                            - {{sameBaseLessExpo2}}</sup>
                                                    </span>
                                                    <b-tooltip target="divisionExpoSolution"
                                                        :title="lessExpoSolutionDesc" />
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">{{sameBaseLessExpo1 - sameBaseLessExpo2}}</sup>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!--Potencia de Potencia-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-3 variant="info">Potencia de una potencia
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="4" class="mb-2">
                                            <b-row>
                                                <b-col>
                                                    <p>Cuando tienen bases iguales, los exponentes se restan</p>
                                                    <span> ( </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">m</sup>
                                                    <span> ) </span>
                                                    <sup class="expo">n</sup>
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">m x n</sup>
                                                </b-col>
                                            </b-row>

                                        </b-col>
                                        <b-col cols="12" md="8" class="mt-2">
                                            <b-row>
                                                <b-col>
                                                    <p style="text-align: left;">Ejemplo</p>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseMultiExpo1" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente m : {{sameBaseMultiExpo1}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseMultiExpo2" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente n : {{sameBaseMultiExpo2}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>
                                                        <span> ( </span>
                                                        <span class="description">a</span>
                                                        <sup class="expo">{{sameBaseMultiExpo1}}</sup>
                                                        <span> ) </span>
                                                        <sup class="expo">{{sameBaseMultiExpo2}}</sup>

                                                    </span>
                                                    <span> = </span>
                                                    <span>
                                                        <span class="description">a</span>
                                                        <sup id="multiExpoSolution" class="expo">{{sameBaseMultiExpo1}}
                                                            x
                                                            {{sameBaseMultiExpo2}}</sup>
                                                    </span>
                                                    <b-tooltip target="multiExpoSolution"
                                                        :title="multiExpoSolutionDesc" />
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">{{sameBaseMultiExpo1 * sameBaseMultiExpo2}}</sup>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!--Potencia de producto-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-4 variant="info">Potencia de un Producto
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="4" class="mb-2">
                                            <b-row>
                                                <b-col>
                                                    <p>Cuando tienen un producto y un exponente los afecta</p>
                                                    <span> ( </span>
                                                    <span class="description">a</span>
                                                    <span class="">x</span>
                                                    <span class="description">b</span>
                                                    <span> ) </span>
                                                    <sup class="expo">m</sup>
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">m</sup>
                                                    <span class="">x</span>
                                                    <span class="description">b</span>
                                                    <sup class="expo">m</sup>
                                                </b-col>
                                            </b-row>

                                        </b-col>
                                        <b-col cols="12" md="8" class="mt-2">
                                            <b-row>
                                                <b-col>
                                                    <p style="text-align: left;">Ejemplo</p>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="comunBaseMultiFactor1" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Factor a : {{comunBaseMultiFactor1}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="comunBaseMultiFactor2" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Factor b : {{comunBaseMultiFactor2}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="comunBaseMultiExpo" :max="10" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente : {{comunBaseMultiExpo}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>
                                                        <span> ( </span>
                                                        <span class="description">{{comunBaseMultiFactor1}}</span>
                                                        <span class="">x</span>
                                                        <span class="description">{{comunBaseMultiFactor2}}</span>
                                                        <span> ) </span>
                                                        <sup class="expo">{{comunBaseMultiExpo}}</sup>

                                                    </span>
                                                    <span> = </span>
                                                    <span>
                                                        <span class="description">{{comunBaseMultiFactor1}}</span>
                                                        <sup class="expo">{{comunBaseMultiExpo}}</sup>
                                                        <span class="">x</span>

                                                        <span class="description">{{comunBaseMultiFactor2}}</span>
                                                        <sup class="expo">{{comunBaseMultiExpo}}</sup>
                                                    </span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!--Potencia de division-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-5 variant="info">Potencia de una división
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="4" class="mb-2">
                                            <b-row>
                                                <b-col>
                                                    <p>Cuando tienen un producto y un exponente los afecta</p>
                                                    <span> ( </span>
                                                    <span class="description">a</span>
                                                    <span class=""> / </span>
                                                    <span class="description">b</span>
                                                    <span> ) </span>
                                                    <sup class="expo">m</sup>
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">m</sup>
                                                    <span class="">/</span>
                                                    <span class="description">b</span>
                                                    <sup class="expo">m</sup>
                                                </b-col>
                                            </b-row>
                                            <b-row class="mt-2">
                                                <b-col>
                                                    <b-icon id="divisionExpoRestriction2" icon="info-circle"
                                                        scale="0.75" shift-v="0.75" aria-hidden="true"></b-icon>
                                                    <b-tooltip target="divisionExpoRestriction2"
                                                        title="Esta condición siempre y cuando b sea diferente de 0">
                                                    </b-tooltip>
                                                    <span>Para b ≠0</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="8" class="mt-2">
                                            <b-row>
                                                <b-col>
                                                    <p style="text-align: left;">Ejemplo</p>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="comunBaseDivisionFactor1" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Factor a : {{comunBaseDivisionFactor1}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="comunBaseDivisionFactor2" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Factor b : {{comunBaseDivisionFactor2}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="comunBaseDivisionExpo" :max="10" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente : {{comunBaseDivisionExpo}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>
                                                        <span> ( </span>
                                                        <span class="description">{{comunBaseDivisionFactor1}}</span>
                                                        <span class=""> / </span>
                                                        <span class="description">{{comunBaseDivisionFactor2}}</span>
                                                        <span> ) </span>
                                                        <sup class="expo">{{comunBaseDivisionExpo}}</sup>

                                                    </span>
                                                    <span> = </span>
                                                    <span>
                                                        <span class="description">{{comunBaseDivisionFactor1}}</span>
                                                        <sup class="expo">{{comunBaseDivisionExpo}}</sup>
                                                        <span class=""> / </span>

                                                        <span class="description">{{comunBaseDivisionFactor2}}</span>
                                                        <sup class="expo">{{comunBaseDivisionExpo}}</sup>
                                                    </span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!--Exponente fraccionario-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-6 variant="info">Exponente fraccionario
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="4" class="mb-2">
                                            <b-row>
                                                <b-col>
                                                    <p>Cuando tienen una base elevado a un exponentes fraccionario</p>
                                                    <span class="description">a</span>
                                                    <sup class="expo">m / n</sup>
                                                    <span> = </span>
                                                    <sup class="square">n</sup>
                                                    <span class="description">√</span>
                                                    <span style="border-top:1px solid" class="description">a</span>
                                                    <sup class="expo">m</sup>
                                                </b-col>
                                            </b-row>

                                        </b-col>
                                        <b-col cols="12" md="8" class="mt-2">
                                            <b-row>
                                                <b-col>
                                                    <p style="text-align: left;">Ejemplo</p>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseDivisionExpo1" :max="50"
                                                                :min="2" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente m : {{sameBaseDivisionExpo1}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseDivisionExpo2" :max="50"
                                                                :min="2" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente n : {{sameBaseDivisionExpo2}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>
                                                        <span class="description">a</span>
                                                        <sup id="multiExpoSolution"
                                                            class="expo">{{sameBaseDivisionExpo1}}
                                                            /
                                                            {{sameBaseDivisionExpo2}}</sup>
                                                    </span>
                                                    <span> = </span>
                                                    <sup class="square">{{sameBaseDivisionExpo1}}</sup>
                                                    <span class="description">√</span>
                                                    <span style="border-top:1px solid" class="description">a</span>
                                                    <sup class="expo">{{sameBaseDivisionExpo2}}</sup>
                                                    <span v-if="sameBaseDivisionExpo1 % sameBaseDivisionExpo2 == 0">
                                                        <span> = </span>
                                                        <span class="description">a</span>
                                                        <sup v-if="sameBaseDivisionExpo1 / sameBaseDivisionExpo2>1"
                                                            id="multiExpoSolution"
                                                            class="expo">{{sameBaseDivisionExpo1 / sameBaseDivisionExpo2}}</sup>
                                                    </span>
                                                </b-col>
                                            </b-row>
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
        name: 'ExponentPower',
        data() {
            return {
                sameBaseSumExpo1: 2,
                sameBaseSumExpo2: 3,

                sameBaseLessExpo1: 8,
                sameBaseLessExpo2: 4,

                sameBaseMultiExpo1: 3,
                sameBaseMultiExpo2: 4,

                comunBaseMultiExpo: 5,
                comunBaseMultiFactor1: 2,
                comunBaseMultiFactor2: 3,

                comunBaseDivisionExpo: 5,
                comunBaseDivisionFactor1: 2,
                comunBaseDivisionFactor2: 3,

                sameBaseDivisionExpo1: 10,
                sameBaseDivisionExpo2: 20,

            }
        },
        computed: {
            sumExpoSolutionDesc() {
                return `Sumamos los exponentes ${this.sameBaseSumExpo1} y ${this.sameBaseSumExpo2}`;
            },
            lessExpoSolutionDesc() {
                return `Restamos los exponentes ${this.sameBaseLessExpo1} y ${this.sameBaseLessExpo2}`;
            },
            multiExpoSolutionDesc() {
                return `Multiplicamos los exponentes ${this.sameBaseMultiExpo1} y ${this.sameBaseMultiExpo2}`;
            }
        },
    }
</script>
<style scoped>
    .description {
        font-family: "MathJax_Math-italic";
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 35px;
    }

    .expo {
        top: -1.0em;
    }

    .square {
        top: -2.0em;
        right: -1em;
    }
</style>