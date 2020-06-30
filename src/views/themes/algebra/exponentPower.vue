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
                                                            <vue-slider v-model="sameBaseMultiExpo1" :max="50" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <span>Exponente 1 : {{sameBaseMultiExpo1}}</span>
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
                                                            <span>Exponente 2 : {{sameBaseMultiExpo2}}</span>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span class="description">a</span>
                                                    <sup class="expo">{{sameBaseMultiExpo1}}</sup>
                                                    <span> x </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">{{sameBaseMultiExpo2}}</sup>
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">{{sameBaseMultiExpo1}} +
                                                        {{sameBaseMultiExpo2}}</sup>
                                                    <span> = </span>
                                                    <span class="description">a</span>
                                                    <sup class="expo">{{sameBaseMultiExpo1 + sameBaseMultiExpo2}}</sup>
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
                sameBaseMultiExpo1: 2,
                sameBaseMultiExpo2: 3
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