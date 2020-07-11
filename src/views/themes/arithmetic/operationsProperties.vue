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
                                    <b-row>

                                    </b-row>
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
    export default {
        name: 'OperationsProperties',
        data() {
            return {
                exampleOneSummatory: 80,
                exampleOneSubstraction: 16

            }
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