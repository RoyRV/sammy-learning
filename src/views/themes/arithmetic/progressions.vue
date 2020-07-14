<template lang="">
    <div>
        <b-row>
            <b-col>
                <h2>Progresiones</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">P. Aritmetica</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-tabs>
                                        <b-tab title="Explicación" active>
                                            <b-row class="mb-4">
                                                <b-col cols="12" class="mt-4">
                                                    <p style="text-align: left;">Dada la progresión aritmetica:</p>
                                                    <p>
                                                        <span class="description">a</span><em><sub>1</sub></em>
                                                        <span class="description"> , a </span><em><sub>2</sub></em>
                                                        <span class="description"> , a </span><em><sub>3</sub></em>
                                                        <span class="description"> , a </span><em><sub>4</sub></em>
                                                        <span class="description"> ... </span>
                                                        <span class="description"> , a </span><em><sub>n-2</sub></em>
                                                        <span class="description"> , a </span><em><sub>n-1</sub></em>
                                                        <span class="description"> , a </span><em><sub>n</sub></em>
                                                    </p>
                                                    <p style="text-align: left;">
                                                        <span>
                                                            Donde :
                                                        </span>
                                                    <ul>
                                                        <li>
                                                            <span class="description">a</span><em><sub>1</sub></em>
                                                            <span class="description"> : </span>
                                                            <span>El primer termino de la sucesión</span>
                                                        </li>
                                                        <li>
                                                            <span class="description">a</span><em><sub>n</sub></em>
                                                            <span class="description"> : </span>
                                                            <span>El útimo termino de la sucesión</span>
                                                        </li>
                                                        <li>
                                                            <span class="description">n</span>
                                                            <span class="description"> : </span>
                                                            <span>La cantidad de terminos de la sucesión</span>
                                                        </li>
                                                    </ul>
                                                    </p>

                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                    </b-tabs>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<!-- <span>Progresiones</span><em><sub>aaa</sub></em> -->
<script>
    export default {
        name: 'Progressions'
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
</style>