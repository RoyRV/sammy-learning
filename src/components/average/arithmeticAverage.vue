<template>
    <div>
        <b-row>
            <b-col cols="12">
                <p style="text-align: left;">El promedio aritmético se obtiene al dividir la suma de datos entre el
                    número de datos. </p>
            </b-col>
            <b-col cols="12">
                <p style="text-align: left;">Dada la sucesión aritmetica:</p>
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
            </b-col>
            <b-col cols="12">
                <b-row>
                    <b-col cols="12">
                        <p style="text-align: left;">La media aritmetica se calcula :</p>
                    </b-col>
                    <b-col cols="12">
                        <b-row>
                            <b-col sm="4" md="2" lg="2" class="mb-3">
                                <span class="description">M.A. = </span>
                            </b-col>
                            <b-col sm="8"  md="4" lg="4">
                                <b-row>
                                    <b-col>
                                        <span>Sumatoria de los números</span>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <span>——————————</span>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <span>cantidad de datos</span>
                                    </b-col>
                                </b-row>
                            </b-col>

                            <b-col sm="4" md="2" lg="1">
                                <span class="description">= </span>
                            </b-col>
                            <b-col sm="8" md="4" lg="5">
                                <b-row>
                                    <b-col>
                                        <span class="">a</span><em><sub>1</sub></em>
                                        <span class=""> + a </span><em><sub>2</sub></em>
                                        <span class=""> +.. </span>
                                        <span class=""> + a </span><em><sub>n-1</sub></em>
                                        <span class=""> + a </span><em><sub>n</sub></em>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <span>————————————</span>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <span>n</span>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>


                    </b-col>
                </b-row>

            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'ArithmeticAveragenComponent',
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