<template>
    <div>
        <b-row>
            <b-col>
                <h2>Promedios</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Promedio Aritmetico / Media Aritmetica (M.A.)</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                   <ArithmeticAverage></ArithmeticAverage>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Promedio Geométrico / Media Geométrica (M.G.)</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                   <GeometricAverage></GeometricAverage>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-3 variant="info">Promedio Armonico / Media Armonica (M.H.)</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                   <ArmonicAverage></ArmonicAverage>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-4 variant="info">Promedio Ponderado (P.P.)</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                   <WeightedAverage></WeightedAverage>
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
    import ArithmeticAverage from '@/components/average/arithmeticAverage.vue';
    import GeometricAverage from '@/components/average/geometricAverage.vue';
    import ArmonicAverage from '@/components/average/armonicAverage.vue';
    import WeightedAverage from '@/components/average/weightedAverage.vue';
     export default {
        name: 'Average',
        components : {ArithmeticAverage , GeometricAverage , ArmonicAverage, WeightedAverage}
     }
</script>