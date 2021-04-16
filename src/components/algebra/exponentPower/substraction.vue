<template>
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
</template>
<script>
    export default {
        name : 'resta',
        data() {
            return {
                sameBaseLessExpo1: 8,
                sameBaseLessExpo2: 4,
            }
        },
        computed: {
            lessExpoSolutionDesc() {
                return `Restamos los exponentes ${this.sameBaseLessExpo1} y ${this.sameBaseLessExpo2}`;
            },
        },
    }
</script>