<template>
    <div>
        <b-row>
            <b-col cols="12">
                <p style="text-align: left;">Cuando los datos tienen un valor (importancia) que se denomina «peso». El promedio es la suma del producto de los datos y su peso, luego se divide entre la suma de pesos.</p>
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
                <p style="text-align: left;">Ahora consideremos que cada número tiene un Peso:</p>
                <p>
                    <span class="description">p</span><em><sub>1</sub></em>
                    <span class="description"> , p </span><em><sub>2</sub></em>
                    <span class="description"> , p </span><em><sub>3</sub></em>
                    <span class="description"> , p </span><em><sub>4</sub></em>
                    <span class="description"> ... </span>
                    <span class="description"> , p </span><em><sub>n-2</sub></em>
                    <span class="description"> , p </span><em><sub>n-1</sub></em>
                    <span class="description"> , p </span><em><sub>n</sub></em>
                </p>
            </b-col>
            <b-col cols="12">
                <b-row>
                    <b-col cols="12">
                        <p style="text-align: left;">El promedio ponderado se calcula :</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-row>
                                <b-col sm="4" md="4" lg="4" class="mb-3">
                                    <span class="description">P.P. = </span>
                                </b-col>
                                <b-col sm="8" md="8" lg="8">
                                    <b-row>
                                        <b-col cols="12">
                                            <b-row>
                                                <b-col>
                                                    <span class="">a</span><em><sub>1</sub></em>
                                                    <em><sub> x </sub></em>
                                                    <span class="">p</span><em><sub>1</sub></em>
                                                    <span> + </span>
                                                    <span class="">a</span><em><sub>2</sub></em>
                                                    <em><sub> x </sub></em>
                                                    <span class="">p</span><em><sub>2</sub></em>
                                                    <span> + ... + </span>
                                                    <span class="">a</span><em><sub>n-1</sub></em>
                                                    <em><sub> x </sub></em>
                                                    <span class="">p</span><em><sub>n-1</sub></em>
                                                    <span> + </span>
                                                    <span class="">a</span><em><sub>n</sub></em>
                                                    <em><sub> x </sub></em>
                                                    <span class="">p</span><em><sub>n</sub></em>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>————————————————————</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span class="">p</span><em><sub>1</sub></em>
                                                    <span class=""> + p </span><em><sub>2</sub></em>
                                                    <span class=""> + ... </span>
                                                    <span class=""> + p </span><em><sub>n-1</sub></em>
                                                    <span class=""> + p </span><em><sub>n</sub></em>
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
        name: 'WeightedAverageComponent',
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