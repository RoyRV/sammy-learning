<template>
   <!--Exponente Negativo-->
   <b-card no-body class="mb-1">
    <b-card-header header-tag="header" role="tab">
        <b-button block v-b-toggle.accordion-8 variant="info">Potencia Negativa
        </b-button>
    </b-card-header>
    <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-card-text>
                <b-row>
                    <b-col cols="12" md="4" class="mb-2">
                        <b-row>
                            <b-col>
                                <b-row>
                                    <b-col>
                                        <p>Cuando tienen una base elevado a un exponentes negativo
                                        </p>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="4" style="padding: 0;">
                                        <span class="description">a</span>
                                        <sup class="expo">-1</sup>
                                        <span> = </span>
                                    </b-col>
                                    <b-col cols="8">
                                        <b-row style="border-bottom: solid 1px;">
                                            <b-col>
                                                <span class="description">1</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="description">a</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
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
                                                <vue-slider v-model="negativeExpoFactor1" :max="50"
                                                    :min="1" />
                                            </b-col>
                                        </b-row>
                                        <b-row class="mb-4">
                                            <b-col>
                                                <span>Valor negativo del exponente :
                                                    {{negativeExpoFactor1}}</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="4" style="padding: 0;">
                                        <span class="description">a</span>
                                        <sup class="expo">-{{negativeExpoFactor1}}</sup>
                                        <span> = </span>
                                    </b-col>
                                    <b-col cols="8">
                                        <b-row style="border-bottom: solid 1px;">
                                            <b-col>
                                                <span class="description">1</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="description">a</span>
                                                <sup class="expo">{{negativeExpoFactor1}}</sup>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-tab>
                            <b-tab title="Ejemplo 2" active>
                                <b-row>
                                    <b-col cols="12">
                                        <b-row>
                                            <b-col>
                                                <vue-slider v-model="negativeExpoFactor2" :max="50"
                                                    :min="1" />
                                            </b-col>
                                        </b-row>
                                        <b-row class="mb-4">
                                            <b-col>
                                                <span>Valor negativo del exponente :
                                                    {{negativeExpoFactor2}}</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="6" md="6" style="padding: 0;">
                                        <span class="description">(a/b)</span>
                                        <sup class="expo">-{{negativeExpoFactor2}}</sup>
                                        <span> = </span>

                                        <span class="description">(b/a)</span>
                                        <sup class="expo">{{negativeExpoFactor2}}</sup>
                                        <span> = </span>
                                    </b-col>
                                    <b-col cols="6" md="6">
                                        <b-row style="border-bottom: solid 1px;">
                                            <b-col>
                                                <span class="description">b</span><sup
                                                    class="expo">{{negativeExpoFactor2}}</sup>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="description">a</span>
                                                <sup class="expo">{{negativeExpoFactor2}}</sup>
                                            </b-col>
                                        </b-row>
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
        name : 'potenciaNegativa',
        data() {
            return {
                negativeExpoFactor1: 4,
                negativeExpoFactor2: 3,
            }
        },
        computed: {
            
        },
    }
</script>