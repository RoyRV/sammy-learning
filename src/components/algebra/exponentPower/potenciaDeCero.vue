<template>
     <!--Exponente Cero-->
     <b-card no-body class="mb-1">
        <b-card-header header-tag="header" role="tab">
            <b-button block v-b-toggle.accordion-7 variant="info">Potencia <strong>0</strong>
            </b-button>
        </b-card-header>
        <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>
                    <b-row>
                        <b-col cols="12" md="4" class="mb-2">
                            <b-row>
                                <b-col>
                                    <p>Cuando tienen una base elevado al exponente <strong>0</strong>
                                    </p>
                                    <span class="description">a</span>
                                    <sup class="expo">0</sup>
                                    <span> = </span>
                                    <span class="description">1</span>
                                </b-col>
                            </b-row>
                            <b-row class="mt-2">
                                <b-col>
                                    <b-icon id="restrictionZeroExpo" icon="info-circle" scale="0.75"
                                        shift-v="0.75" aria-hidden="true">
                                    </b-icon>
                                    <b-tooltip target="restrictionZeroExpo"
                                        title="Para toda variable a Diferente de 0">
                                    </b-tooltip>
                                    <span>∀a∈R–{0}</span>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="12" md="8" class="mt-2">
                            <b-tabs content-class="mt-3">
                                <b-tab title="Ejemplo 1" active>
                                    <b-row>
                                        <b-col cols="12">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="baseZeroExpoFactor1" :max="50"
                                                        :min="1" />
                                                </b-col>
                                            </b-row>
                                            <b-row class="mb-4">
                                                <b-col>
                                                    <span>Base : {{baseZeroExpoFactor1}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>
                                            <span>
                                                <span> ( </span>
                                                <span class="description">{{baseZeroExpoFactor1}}</span>
                                                <span> ) </span>
                                                <sup class="expo">0</sup>

                                            </span>
                                            <span> = </span>
                                            <span class="description">1</span>
                                        </b-col>
                                    </b-row>
                                </b-tab>
                                <b-tab title="Ejemplo 2">
                                    <b-row>
                                        <b-col>
                                            <p style="text-align: left;">Ejemplo :</p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="baseZeroExpoFactor1" :max="50"
                                                        :min="1" />
                                                </b-col>
                                            </b-row>
                                            <b-row class="mb-4">
                                                <b-col>
                                                    <span>Factor 1 : {{baseZeroExpoFactor1}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="baseZeroExpoFactor2" :max="50"
                                                        :min="1" />
                                                </b-col>
                                            </b-row>
                                            <b-row class="mb-4">
                                                <b-col>
                                                    <span>Factor 2 : {{baseZeroExpoFactor2}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>
                                            <span>
                                                <span> ( </span>
                                                <span class="description">{{baseZeroExpoFactor1}}</span>
                                                <span> x </span>
                                                <span class="description">{{baseZeroExpoFactor2}}</span>
                                                <span> ) </span>
                                                <sup class="expo">0</sup>

                                            </span>
                                            <span> = </span>
                                            <span class="description">1</span>
                                        </b-col>
                                    </b-row>
                                </b-tab>

                                <b-tab title="Ejemplo 3">
                                    <b-row>
                                        <b-col>
                                            <p style="text-align: left;">Ejemplo :</p>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="baseZeroExpoFactor1" :max="50"
                                                        :min="1" />
                                                </b-col>
                                            </b-row>
                                            <b-row class="mb-4">
                                                <b-col>
                                                    <span>Factor 1 : {{baseZeroExpoFactor1}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="baseZeroExpoFactor2" :max="50"
                                                        :min="1" />
                                                </b-col>
                                            </b-row>
                                            <b-row class="mb-4">
                                                <b-col>
                                                    <span>Factor 2 : {{baseZeroExpoFactor2}}</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>
                                            <span>
                                                <span class="description">{{baseZeroExpoFactor1}}</span>
                                                <span> x </span>
                                                <span> ( </span>
                                                <span class="description">{{baseZeroExpoFactor2}}</span>
                                                <span> ) </span>
                                                <sup class="expo">0</sup>
                                            </span>
                                            <span> = </span>

                                            <span>
                                                <span class="description">{{baseZeroExpoFactor1}}</span>
                                                <span> x </span>
                                                <span class="description"> ( 1 ) </span>
                                            </span>
                                            <span> = </span>
                                            <span class="description">{{baseZeroExpoFactor1}}</span>
                                        </b-col>
                                    </b-row>
                                </b-tab>
                            </b-tabs>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>
<script>
    export default {
        name : 'potenciaDeCero',
        data() {
            return {
                baseZeroExpoFactor1: 2,
                baseZeroExpoFactor2: 2,
            }
        },
    }
</script>