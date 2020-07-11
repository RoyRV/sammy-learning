<template>
    <div>
        <b-row>
            <b-col>
                <h2>Hallar dos números sabiendo...</h2>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col>
                <div role="tablist">
                    <!--La suma y resta-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">La suma y resta </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-tabs content-class="mt-3">
                                        <b-tab title="Explicación" active>
                                            <b-row class="mb-4">
                                                <b-col cols="12" md="6">
                                                    <p style="text-align: left;">Donde:</p>
                                                    <span class="description">a + b = X</span>
                                                    <br>
                                                    <span class="description">a - b = Y</span>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <p style="text-align: left;">Entonces:</p>
                                                    <span class="description">a = (X+Y)/2</span>
                                                    <br>
                                                    <span class="description">b = (X-Y)/2</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <p style="text-align: left;">Ejemplo : </p>
                                                    <p style="text-align: left;">Donde sabemos que la suma de a y b es
                                                        34</p>
                                                    <p style="text-align: left;">Donde sabemos que la resta de a y b es
                                                        10</p>
                                                    <span>X + Y = 34 + 10 ...(lo convierto en valores de a y b)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>(a + b) + (a - b) = 44 (quito los parentesis)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>a + b + a - b = 44 (elimino la variable B)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>2a = 44 (sumo las variables a)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>a = 44 / 2 (paso el factor 2 a dividir)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>a = 22 (obtengo el resultado)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row class="mt-4">
                                                <b-col style="text-align: left;">
                                                    <p>Para obtener el valor de la variable "b" podriamos usar 3
                                                        técnicas</p>
                                                    <ul>
                                                        <li>
                                                            Restar los valores de X e Y y obtener el resultado
                                                        </li>
                                                        <li>
                                                            Reemplazar el valor de la variable a en X
                                                        </li>
                                                        <li>
                                                            Reemplazar el valor de la variable a en Y
                                                        </li>
                                                    </ul>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <p>Reemplazando a en X</p>
                                                    <span>a + b = x</span> <br>
                                                    <span>22 + b = 34</span> <br>
                                                    <span>b = 34 - 22</span> <br>
                                                    <span>b = 12</span> <br>
                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                        <b-tab title="Ejemplo">
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="exampleOneSummatory" :max="100"
                                                                :min="1" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <p>Dada la <strong>suma</strong> de 2 números A y B es igual
                                                                a
                                                                {{exampleOneSummatory}}</p>
                                                            <p>A + B = {{exampleOneSummatory}}</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="exampleOneSubstraction" :max="100"
                                                                :min="1" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <p>Dada la <strong>resta</strong> de 2 números A y B es
                                                                igual a
                                                                {{exampleOneSubstraction}}</p>
                                                            <p>A - B = {{exampleOneSubstraction}}</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <p>Entonces para determinar A, <strong>sumamos</strong> los valores
                                                        de la suma y
                                                        resta ({{exampleOneSummatory}} + {{exampleOneSubstraction}})
                                                        y dividimos entre 2
                                                    </p>
                                                    <p> A = ({{exampleOneSummatory}} + {{exampleOneSubstraction}}) / 2
                                                    </p>
                                                    <p> A = {{(exampleOneSummatory + exampleOneSubstraction)}} / 2
                                                    </p>
                                                    <p> A = {{(exampleOneSummatory + exampleOneSubstraction) / 2 }}
                                                    </p>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <p>Entonces para determinar B, <strong>restamos</strong> los valores
                                                        de la suma y
                                                        resta ({{exampleOneSummatory}} - {{exampleOneSubstraction}})
                                                        y dividimos entre 2
                                                    </p>
                                                    <p> B = ({{exampleOneSummatory}} - {{exampleOneSubstraction}}) / 2
                                                    </p>
                                                    <p> B = {{(exampleOneSummatory - exampleOneSubstraction)}} / 2
                                                    </p>
                                                    <p> B = {{(exampleOneSummatory - exampleOneSubstraction) / 2 }}
                                                    </p>
                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                    </b-tabs>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!--La suma y el cociente-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">La suma y el cociente</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-tabs content-class="mt-3">
                                        <b-tab title="Explicación" active>
                                            <b-row class="mb-4">
                                                <b-col cols="12" md="6">
                                                    <p style="text-align: left;">Donde:</p>
                                                    <span class="description">a + b = S</span>
                                                    <br>
                                                    <span class="description">a / b = Q</span>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <p style="text-align: left;">Entonces:</p>
                                                    <span class="description">a = (S * Q)/(Q + 1)</span>
                                                    <br>
                                                    <span class="description">b = ( S )/(Q + 1)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col style="text-align: left;">
                                                    <p>Ejemplo : </p>
                                                    <p>Donde sabemos que la suma de a y b es 25</p>
                                                    <p>Donde sabemos que el cociente de a y b es 4</p>
                                                    <p>En la suma, convertimos <strong>a</strong> en función de
                                                        <strong>b</strong> => <span>a = 25 - b .... (1)</span>
                                                    </p>
                                                    <p>En el cociente, convertimos <strong>a</strong> en función de
                                                        <strong>b</strong> => <span>a = 4b .... (2)</span>
                                                    </p>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>Igualamos los valores de a, de las dos ecuaciones 1 y 2</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>25 - b = 4b</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>25 = 5b (paso b a sumar al otro lado)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>25 / 5 = b (obtengo el resultado)</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>b = 5</span>
                                                </b-col>
                                            </b-row>
                                            <b-row class="mt-4">
                                                <b-col style="text-align: left;">
                                                    <p>Para obtener el valor de la variable "a" podriamos usar 2
                                                        técnicas</p>
                                                    <ul>
                                                        <li>
                                                            Reemplazar el valor de la variable a en la ecuación S o Q
                                                        </li>
                                                        <li>
                                                            Reemplazar el valor de la variable a en la ecuación (1) o
                                                            (2)
                                                        </li>
                                                    </ul>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <p>Reemplazando a en S</p>
                                                    <span>a + b = S</span> <br>
                                                    <span>a + 5 = 25</span> <br>
                                                    <span>a =25 - 5</span> <br>
                                                    <span>a = 20</span> <br>
                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                        <b-tab title="Ejemplo Descriptivo">
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="exampleTwoSummatory" :max="100"
                                                                :min="1" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <p>Dada la <strong>suma</strong> de 2 números A y B es igual
                                                                a
                                                                {{exampleTwoSummatory}}</p>
                                                            <p>A + B = {{exampleTwoSummatory}}</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="exampleTwoQuotient" :max="100"
                                                                :min="1" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <p>Dada la <strong>división</strong> de 2 números A y B es
                                                                igual a
                                                                {{exampleTwoQuotient}}</p>
                                                            <p>A / B = {{exampleTwoQuotient}}</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <p>Entonces para determinar A</p>
                                                    <p><strong>Expresamos B</strong> en función de A</p>
                                                    <p>(De la suma) B = {{exampleTwoSummatory}} - A ... (1)</p>
                                                    <p>(De la división) B = A / {{exampleTwoQuotient}} ... (2)</p>
                                                    <p>Igualamos la expresión 1 y 2</p>
                                                    <p>{{exampleTwoSummatory}} - A = A / {{exampleTwoQuotient}}</p>
                                                    <p>{{exampleTwoSummatory}} = (A / {{exampleTwoQuotient}}) + A</p>
                                                    <p>{{exampleTwoSummatory}} = ({{exampleTwoQuotient}} A + A )/
                                                        {{exampleTwoQuotient}}</p>
                                                    <p>{{exampleTwoSummatory}} = ({{exampleTwoQuotient + 1 }} A
                                                        )/{{exampleTwoQuotient}}</p>
                                                    <p>{{exampleTwoSummatory}} * {{exampleTwoQuotient}} =
                                                        ({{exampleTwoQuotient + 1 }} A)</p>
                                                    <p>{{exampleTwoSummatory * exampleTwoQuotient}} =
                                                        ({{exampleTwoQuotient + 1 }} A)</p>
                                                    <p>{{exampleTwoSummatory * exampleTwoQuotient}} /
                                                        {{exampleTwoQuotient + 1 }} = A</p>
                                                    <p v-if="!exampleTwoCanSimplify"> {{getSimplifiedFraction (exampleTwoSummatory * exampleTwoQuotient,
                                                        exampleTwoQuotient + 1 )}} = A</p>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <p>Entonces para determinar B</p>
                                                    <p><strong>Expresamos A</strong> en función de B</p>
                                                    <p>(De la suma) A = {{exampleTwoSummatory}} - B ... (1)</p>
                                                    <p>(De la división) A = {{exampleTwoQuotient}} B ... (2)</p>
                                                    <p>Igualamos la expresión 1 y 2</p>
                                                    <p>{{exampleTwoSummatory}} - B = {{exampleTwoQuotient}} B</p>
                                                    <p>{{exampleTwoSummatory}} = {{exampleTwoQuotient }}B + B</p>
                                                    <p>{{exampleTwoSummatory}} = ({{exampleTwoQuotient + 1}} B )</p>
                                                    <p>{{exampleTwoSummatory}} / {{exampleTwoQuotient + 1}} = B</p>

                                                    <p v-if="!exampleTwoCanSimplify"> {{getSimplifiedFraction (exampleTwoSummatory,
                                                        exampleTwoQuotient + 1 )}} = B</p>
                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                        <b-tab title="Ejemplo/Formula">
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="exampleTwoSummatory" :max="100"
                                                                :min="1" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <p>Dada la <strong>suma</strong> de 2 números A y B es igual
                                                                a
                                                                {{exampleTwoSummatory}}</p>
                                                            <p>A + B = {{exampleTwoSummatory}}</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="exampleTwoQuotient" :max="100"
                                                                :min="1" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mb-4">
                                                        <b-col>
                                                            <p>Dada la <strong>división</strong> de 2 números A y B es
                                                                igual a
                                                                {{exampleTwoQuotient}}</p>
                                                            <p>A / B = {{exampleTwoQuotient}}</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" md="6">
                                                    <p>Entonces para determinar A</p>
                                                    <p>
                                                        A = ({{exampleTwoSummatory}} * {{exampleTwoQuotient}}) /
                                                        ({{exampleTwoQuotient}} + 1)
                                                    </p>
                                                    <p>
                                                        A = ({{exampleTwoSummatory * exampleTwoQuotient}}) /
                                                        ({{exampleTwoQuotient + 1 }})
                                                    </p>
                                                    <p v-if="!exampleTwoCanSimplify">
                                                        A= {{getSimplifiedFraction (exampleTwoSummatory * exampleTwoQuotient,
                                                            exampleTwoQuotient + 1 )}} </p>
                                                </b-col>
                                                <b-col cols="12" md="6">
                                                    <p>Entonces para determinar B</p>
                                                    <p>
                                                        B = ({{exampleTwoSummatory}}) /
                                                        ({{exampleTwoQuotient}} + 1)
                                                    </p>
                                                    <p>
                                                        B = ({{exampleTwoSummatory}}) /
                                                        ({{exampleTwoQuotient + 1}})
                                                    </p>
                                                    <p v-if="!exampleTwoCanSimplify">
                                                        B =
                                                        {{getSimplifiedFraction (exampleTwoSummatory , exampleTwoQuotient + 1 )}}
                                                    </p>
                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                    </b-tabs>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!--La diferencia y el cociente-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-3 variant="info">La diferencia y el cociente</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <span>La diferencia y el cociente</span>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!--El producto el cociente-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-4 variant="info">El producto y el cociente</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <span>El producto y el cociente</span>
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
    import { mathHelper } from '@/helpers';
    export default {
        name: 'OperationsProperties',
        data() {
            return {
                exampleOneSummatory: 80,
                exampleOneSubstraction: 16,
                exampleTwoSummatory: 80,
                exampleTwoQuotient: 16,
                exampleTwoCanSimplify: false
            }
        },
        methods: {
            getSimplifiedFraction(n1, n2) {
                var value = mathHelper.getSimplifiedFraction(n1, n2);
                this.exampleTwoCanSimplify = value.indexOf(`/ ${n2}`) !== -1;
                return value == '' ? '1' : value;
            }
        },
        watch: {
            exampleTwoSummatory: {
                immediate: false,
                deep: true,
                handler() {
                    let n1 = this.exampleTwoSummatory * this.exampleTwoQuotient;
                    let n2 = this.exampleTwoQuotient + 1;
                    this.getSimplifiedFraction(n1, n2);
                }
            },
            exampleTwoQuotient: {
                immediate: false,
                deep: true,
                handler() {
                    let n1 = this.exampleTwoSummatory;
                    let n2 = this.exampleTwoQuotient + 1;
                    this.getSimplifiedFraction(n1, n2);
                }
            },
        },
    }
</script>
<style scoped>
    .formula {
        border-bottom: 1px solid;
    }

    .description {
        font-family: "MathJax_Math-italic";
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 35px;
    }
</style>