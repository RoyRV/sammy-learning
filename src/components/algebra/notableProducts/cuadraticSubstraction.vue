<template>
    <div role="tablist">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info">( a - b ) <sup>2</sup></b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>
                        <b-tabs>
                            <b-tab title="Explicación" active>
                                <b-row>
                                    <b-col cols="12">
                                        <p style="text-align: left;">Dado dos números , a y b , y queremos encontrar el
                                            valor del cuadrado de la resta de ellos, es decir (a-b)<sup>2</sup></p>
                                        <p style="text-align: left;">Como ya sabemos, la exponenciación es multiplicar
                                            el
                                            mismo valor x si mismo <strong>n</strong> veces, en este caso 2</p>
                                        <p>
                                            <span class="description">( a - b ) <sup>2</sup></span>
                                            <span class="description"> = (a - b) <em><sub>x</sub></em> (a - b)</span>
                                        </p>
                                        <p style="text-align: left;">Se opera el producto aplicando la tecnica de
                                            multiplicacion en cada miembro</p>
                                        <p>
                                            <span class="description"> = a<em><sub> x </sub></em></span>
                                            <span class="description"> ( a + b )</span>
                                            <span class="description"> - b <em><sub> x </sub></em> </span>
                                            <span class="description"> ( a + b )</span>
                                        </p>
                                        <p>
                                            <span class="description"> = a<em><sub> x </sub></em>a</span>
                                            <span class="description"> + a <em><sub> x </sub></em> (-b)</span>
                                            <span class="description"> + (-b)<em><sub> x </sub></em> a </span>
                                            <span class="description"> + (-b)<em><sub> x </sub></em>(-b)</span>
                                        </p>
                                        <p>
                                            <span class="description"> = a<sup>2</sup> </span>
                                            <span class="description"> - a<em><sub> x </sub></em>b</span>
                                            <span> ( un valor positivo por uno negativo sale negativo)</span>
                                            <span class="description"> - b<em><sub> x </sub></em>a </span>
                                            <span> ( un valor positivo por uno negativo sale negativo)</span>
                                            <span class="description"> + b<sup>2</sup> </span>
                                            <span> ( un valor negativo por uno negativo sale positivo)</span>
                                        </p>
                                        <p>
                                            <span class="description"> = a<sup>2</sup> </span>
                                            <span class="description"> - a<em><sub> x </sub></em>b </span>
                                            <span class="description"> - a<em><sub> x </sub></em>b</span>
                                            <span> (el orden de los factores no afecta el producto)</span>
                                            <span class="description"> + b<sup>2</sup> </span>
                                        </p>
                                    </b-col>
                                    <b-col cols="12" class="mt-2">
                                        <span class="description">=> ( a - b ) <sup>2</sup></span>
                                        <span class="description"> = a<sup>2</sup></span>
                                        <span class="description"> - 2ab</span>
                                        <span class="description"> + b<sup>2</sup></span>
                                    </b-col>
                                </b-row>
                            </b-tab>
                            <b-tab title="Ejemplos">
                                <b-row class="mt-3">
                                    <b-col cols="12" style="text-align: left;">
                                        <p>Ejemplo : </p>
                                    </b-col>
                                    <b-col md="6" sm="12">
                                        <b-row>
                                            <b-col>
                                                <vue-slider v-model="primerFactor" :max="50" :min="30" />
                                            </b-col>
                                        </b-row>
                                        <b-row class="mb-4">
                                            <b-col>
                                                <span>Primer Factor : {{primerFactor}}</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                    <b-col md="6" sm="12">
                                        <b-row>
                                            <b-col>
                                                <vue-slider v-model="segundoFactor" :max="29" :min="1" />
                                            </b-col>
                                        </b-row>
                                        <b-row class="mb-4">
                                            <b-col>
                                                <span>Segundo Factor : {{segundoFactor}}</span>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                    <b-col cols="12" style="text-align: left;">
                                        <p>Teniendo estos lados , el lado total de cuadrado seria {{ primerFactor +
                                            segundoFactor}} </p>
                                        <p>
                                            Si resolvemos la ecuación por producto notable seria
                                            <span> {{primerFactor}} <sup>2</sup></span>
                                            <span> - 2 <em><sub>x</sub></em> {{primerFactor}} <em><sub>x</sub></em>
                                                {{segundoFactor}}</span>
                                            <span> + {{segundoFactor}} <sup>2</sup></span>
                                        </p>
                                        <p>
                                            =>
                                            <span> {{primerFactor * primerFactor}} <sup></sup></span>
                                            <span> - {{2 * primerFactor * segundoFactor}}</span>
                                            <span> + {{segundoFactor * segundoFactor}} </span>
                                        </p>
                                        <p>
                                            =>
                                            <span> El resultado sería : {{ Math.pow(primerFactor - segundoFactor, 2)}}
                                            </span>
                                        </p>

                                        <p>
                                            Igualmente si hacemos el cuadrado de la suma
                                            <span> {{ primerFactor - segundoFactor}} <sup>2</sup> = {{
                                                Math.pow(primerFactor-
                                                segundoFactor, 2)}} </span>
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
</template>
<script>
    export default {
        name: 'CuadraticSubstraction',
        data() {
            return {
                primerFactor: 30,
                segundoFactor: 8
            }
        },
    }
</script>