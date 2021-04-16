<template>
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
                                        <sup class="expo">{{sameBaseDivisionExpo1}} /
                                            {{sameBaseDivisionExpo2}}</sup>
                                    </span>
                                    <span> = </span>
                                    <sup class="square">{{sameBaseDivisionExpo1}}</sup>
                                    <span class="description">√</span>
                                    <span style="border-top:1px solid" class="description">a</span>
                                    <sup class="expo">{{sameBaseDivisionExpo2}}</sup>
                                    <span>
                                        <span> = </span>
                                        <span class="description">a</span>
                                        <sup id="divisionSolution" class="expo">{{
                                            getSimplifiedFraction(sameBaseDivisionExpo1 ,
                                            sameBaseDivisionExpo2)}}</sup>
                                        <b-tooltip target="divisionSolution"
                                            :title="divisionSolutionDesc" />

                                    </span>
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
    import { mathHelper } from '@/helpers';
    export default {
        name : 'exponenteFraccionario',
        data() {
            return {
                sameBaseDivisionExpo1: 10,
                sameBaseDivisionExpo2: 20,
            }
        },
        methods: {
            getSimplifiedFraction(n1, n2) {
                return mathHelper.getSimplifiedFraction(n1, n2);
            }
        },
        computed: {
            divisionSolutionDesc() {
                return 'Simplificamos todos los factores comunes que se pueda en una division';
            }
        },
    }
</script>