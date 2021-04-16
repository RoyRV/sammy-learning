<template>
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
</template>
<script>
    export default {
        name : 'potenciaDePotencia',
        data() {
            return {
                sameBaseMultiExpo1: 3,
                sameBaseMultiExpo2: 4,
            }
        },
        computed: {
            multiExpoSolutionDesc() {
                return `Multiplicamos los exponentes ${this.sameBaseMultiExpo1} y ${this.sameBaseMultiExpo2}`;
            },
        },
    }
</script>