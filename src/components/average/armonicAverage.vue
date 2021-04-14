<template>
    <div>
        <b-row>
            <b-col cols="12">
                <p style="text-align: left;">El promedio armónico o media armónica se obtiene al dividir el número de
                    datos entre la suma de inversas de los datos</p>
            </b-col>
            <b-col cols="12">
                <p style="text-align: left;">Dados los números:</p>
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
                        <p style="text-align: left;">La media armonica se calcula :</p>
                    </b-col>
                    <b-col cols="12">
                        <b-row>
                            <b-col sm="4" md="4" lg="4" class="mb-3">
                                <span class="description">M.H. = </span>
                            </b-col>
                            <b-col sm="8" md="8" lg="8">
                                <b-row>
                                    <b-col cols="12">
                                        <b-row>
                                            <b-col>
                                                <span>cantidad de datos</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span>————————————————————</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span>Sumatoria de las inversas de los números</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>

                    <b-col cols="12">
                        <b-row>
                            <b-col sm="4" md="4" lg="4" class="mb-3">
                                <span class="description">M.H. = </span>
                            </b-col>
                            <b-col sm="8" md="8" lg="8">
                                <b-row>
                                    <b-col cols="12">
                                        <b-row>
                                            <b-col>
                                                <span>n</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span>————————————————————</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="">1/a</span><em><sub>1</sub></em>
                                                <span class=""> + 1/a </span><em><sub>2</sub></em>
                                                <span class=""> +.. </span>
                                                <span class=""> + 1/a </span><em><sub>n-1</sub></em>
                                                <span class=""> + 1/a </span><em><sub>n</sub></em>
                                            </b-col>
                                        </b-row>
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
        name: 'ArmonicAveragenComponent',
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