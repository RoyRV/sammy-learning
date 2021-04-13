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
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import ArithmeticAverage from '@/components/average/arithmeticAverage.vue';
     export default {
        name: 'Average',
        components : {ArithmeticAverage}
     }
</script>