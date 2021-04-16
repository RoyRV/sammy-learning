<template>
    <b-card no-body class="mb-1">
        <b-card-header header-tag="header" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info">( a + b ) <sup>3</sup></b-button>
        </b-card-header>
        <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel" >
            <b-card-body>
                <b-card-text>
                    <b-tabs>
                        <b-tab title="Explicación" active>
                            <b-row>
                                <b-col cols="12">
                                    <p style="text-align: left;">Dado dos números , a y b , y queremos encontrar el
                                        valor del cuadrado de la suma de ellos, es decir (a+b)<sup>3</sup></p>
                                    <p style="text-align: left;">Como ya sabemos, la exponenciación es multiplicar el
                                        mismo valor x si mismo <strong>n</strong> veces, en este caso 3</p>
                                    <p>
                                        <span class="description">( a + b ) <sup>3</sup></span>
                                        <span class="description"> = (a + b) <em><sub>x</sub></em> (a + b) <em><sub>x</sub></em> (a + b)</span>
                                    </p>
                                    <p style="text-align: left;">Se opera el producto aplicando la tecnica de
                                        multiplicacion en cada miembro, primero tomamos los 2 primeros terminos</p>
                                    <p>
                                        <span class="description">=> ( a + b ) <sup>2</sup></span>
                                        <span class="description"> <em><sub> x </sub></em></span>
                                        <span class="description"> ( a + b ) </span>
                                    </p>
                                    <p>
                                        <span class="description">=> ( a  <sup>2</sup></span>
                                        <span class="description"> + 2ab </span>
                                        <span class="description">+ b <sup>2</sup> ) </span>
                                        <span class="description"> <em><sub> x </sub></em></span>
                                        <span class="description"> ( a + b ) </span>
                                    </p>
                                    <p>
                                        <span class="description">=> [ a  <sup>2</sup></span>
                                        <span class="description"> <em><sub>x</sub></em></span>
                                        <span class="description"> ( a + b ) ]</span>
                                        <span class="description"> + </span>
                                        <span class="description"> [ 2ab </span>
                                        <span class="description"> <em><sub> x </sub></em></span>
                                        <span class="description"> ( a + b ) ]</span>
                                        <span class="description"> + </span>
                                        <span class="description"> [ b  <sup>2</sup></span>
                                        <span class="description"> <em><sub>x</sub></em></span>
                                        <span class="description"> ( a + b ) ]</span>
                                    </p>
                                    <p>
                                        <span class="description">=> [ ( a  <sup>2</sup></span>
                                        <span class="description"> <em><sub>x</sub></em></span>
                                        <span class="description"> a ) + ( a <sup>2</sup> <em><sub>x</sub></em> b ) ] </span>
                                        <span class="description"> + </span>
                                        <span class="description"> [ ( 2ab  <em><sub> x </sub></em> a ) </span>
                                        <span class="description"> + ( 2ab <em><sub> x </sub></em> b ) ]</span>
                                        <span class="description"> + </span>
                                        <span class="description"> [ ( b  <sup>2</sup><em><sub> x </sub></em> a )+ </span>
                                        <span class="description"> ( b  <sup>2</sup><em><sub> x </sub></em> b ) ]</span>
                                    </p>
                                    <p>
                                        <span class="description">=> [ ( a  <sup>3</sup> + a<sup>2</sup> b ) ] </span>
                                        <span class="description"> + </span>
                                        <span class="description"> [ ( 2a<sup>2</sup>b ) + </span>
                                        <span class="description"> ( 2ab<sup>2</sup> ) ]</span>
                                        <span class="description"> + </span>
                                        <span class="description"> [ ( b<sup>2</sup>a ) + </span>
                                        <span class="description"> ( b<sup>3</sup> ) ]</span>
                                    </p>
                                </b-col>
                                <b-col cols="12" class="mt-2">
                                    <span class="description">=> ( a + b ) <sup>3</sup></span>
                                    <span class="description"> = a<sup>3</sup></span>
                                    <span class="description"> + 3a<sup>2</sup>b</span>
                                    <span class="description"> + 3ab<sup>2</sup></span>
                                    <span class="description"> + b<sup>3</sup></span>
                                </b-col>
                            </b-row>
                        </b-tab>
                    </b-tabs>
                </b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>
<script>
    export default{

    }
</script>
<style scoped>
    .description {
        font-family: "MathJax_Math-italic";
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 25px;
    }
</style>