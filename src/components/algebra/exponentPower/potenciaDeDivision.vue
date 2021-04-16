<template>
    <div>
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
    </div>
</template>
<script>
    export default {
        name : 'PotenciaDeDivision',
        data() {
            return {
                comunBaseDivisionExpo: 5,
                comunBaseDivisionFactor1: 2,
                comunBaseDivisionFactor2: 3,
            }
        },
        computed: {
            
        },
    }
</script>