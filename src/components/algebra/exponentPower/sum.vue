<template>
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
</template>
<script>
    export default {
        name : 'suma',
        data() {
            return {
                sameBaseSumExpo1: 2,
                sameBaseSumExpo2: 3,
            }
        },
        computed: {
            sumExpoSolutionDesc() {
                return `Sumamos los exponentes ${this.sameBaseSumExpo1} y ${this.sameBaseSumExpo2}`;
            },
        },
    }
</script>