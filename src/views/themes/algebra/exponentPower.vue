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
                                                            <vue-slider v-model="comunBasefactor1" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Factor a : {{comunBasefactor1}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="comunBasefactor2" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Factor b : {{comunBasefactor2}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="sameBaseComunExpo" :max="10" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente : {{sameBaseComunExpo}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>
                                                        <span> ( </span>
                                                        <span class="description">{{comunBasefactor1}}</span>
                                                        <span class="">x</span>
                                                        <span class="description">{{comunBasefactor2}}</span>
                                                        <span> ) </span>
                                                        <sup class="expo">{{sameBaseComunExpo}}</sup>

                                                    </span>
                                                    <span> = </span>
                                                    <span>
                                                        <span class="description">{{comunBasefactor1}}</span>
                                                        <sup class="expo">{{sameBaseComunExpo}}</sup>
                                                        <span class="">x</span>

                                                        <span class="description">{{comunBasefactor2}}</span>
                                                        <sup class="expo">{{sameBaseComunExpo}}</sup>
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
                sameBaseComunExpo: 5,
                comunBasefactor1: 2,
                comunBasefactor2: 3
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
</style>