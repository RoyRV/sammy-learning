<template>
    <div>
        <b-tabs>
            <b-tab title="Explicación" active>
                <b-row class="mt-1">
                    <b-col cols="12" style="text-align:left;">
                        <h3>Definición :</h3>
                        <span>
                            Una progresión geométrica es una sucesión de números reales llamados términos, en la que cada término (excepto el primero) se obtiene multiplicando el término anterior por una constante denominada razón o factor de la progresión
                        </span>
                    </b-col>
                </b-row>
                <b-row class="mb-4">
                    <b-col cols="12" class="mt-4">
                        <p style="text-align: left;">Dada la progresión geometrica:</p>
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
                </b-row>
                <b-row class="mt-6">
                    <b-col cols="12" md="6">
                        <p style="text-align: left;">
                            <span>Donde :</span>
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
                                <li>
                                    <span class="description">r</span>
                                    <span class="description"> : </span>
                                    <span>Razón <b>constante</b> entre los miembros de la sucesión</span>
                                </li>
                            </ul>
                        </p>

                    </b-col>
                    <b-col cols="12" md="6">
                        <p style="text-align: left;">Dada la siguiente sucesión :</p>
                        <p style="text-align: left;">2 , 6 , 18 , 54 , 162 , 486 , 1458 , 4374 , 13122 , 39366</p>
                        <ul style="text-align: left;">
                            <li><span class="description">a</span><em><sub>1</sub></em> : 2</li>
                            <li><span class="description">a</span><em><sub>2</sub></em> : 6</li>
                            <li><span class="description">a</span><em><sub>10</sub></em> :39366</li>
                            <li><span class="description">r</span>: 3</li>
                            <li><span class="description">n</span>: 10</li>
                        </ul>
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </div>
</template>
<script>
    export default {
        name: 'GeometricProgressionComponent',
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

    .btnProperty {
        background-color: #17a2b8 !important;
        border-color: #17a2b8 !important;
    }

    .btnProperty:active {
        background-color: #17a2b8 !important;
        border-color: #17a2b8 !important;
    }

    .btnProperty:hover {
        background-color: #17a2b8 !important;
        border-color: #17a2b8 !important;
    }
</style>