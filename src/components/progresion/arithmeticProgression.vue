<template>
    <div>
        <b-tabs>
            <b-tab title="Explicación" active>
                <b-row class="mt-1">
                    <b-col cols="12" style="text-align:left;">
                        <h3>Definición :</h3>
                        <span>
                            Es una sucesión en la que cada término (excepto el primero) se
                            obtiene sumando al anterior un número o cantidad fija que
                            llamamos diferencia. Esa cantidad que sumamos puede ser positiva
                            o negativa.
                        </span>
                    </b-col>
                </b-row>
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
                                    <span class="description">d</span>
                                    <span class="description"> : </span>
                                    <span>Diferencia <b>constante</b> entre los miembros de la sucesión</span>
                                </li>
                            </ul>
                        </p>

                    </b-col>
                    <b-col cols="12" md="6">
                        <p style="text-align: left;">Dada la siguiente sucesión :</p>
                        <p style="text-align: left;">1 , 5 , 9 , 13 , 17 , 21 , 25 , 29 , 33 , 37 , 41</p>
                        <ul style="text-align: left;">
                            <li><span class="description">a</span><em><sub>1</sub></em> : 1</li>
                            <li><span class="description">a</span><em><sub>2</sub></em> : 5</li>
                            <li><span class="description">a</span><em><sub>10</sub></em> :41</li>
                            <li><span class="description">d</span>: 4</li>
                            <li><span class="description">n</span>: 10</li>
                        </ul>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title="Propiedades">
                <b-row>
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
                    </b-col>
                    <b-col cols="12">
                        <b-row>
                            <b-col>
                                <span>Una progresión aritmética hemos dicho que cada término (excepto el primero, a1) 
                                    se obtiene sumando al anterior la diferencia, que vamos a designar con la letra d</span><br />
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="mt-4">
                                <div role="tablist">
                                    <b-card no-body class="mb-1">
                                        <b-card-header header-tag="header" role="tab">
                                            <b-button block v-b-toggle.properties-1
                                                class="btnProperty">La Diferencia</b-button>
                                        </b-card-header>
                                        <b-collapse id="properties-1"
                                            accordion="my-accordion1" role="tabpanel">
                                            <b-card-body>
                                                <b-card-text>
                                                    <b-row class="mt-1">
                                                        <b-col cols="12" md="4">
                                                            <p style="text-align: left;">Se deduce que: </p>
                                                            <ul style="text-align: left;">
                                                                <li>
                                                                    <span class="description">a</span><em><sub>2</sub></em>
                                                                    <span class="description">=a</span><em><sub>1</sub></em>
                                                                    <span class="description">+d</span>
                                                                </li>
                                                                <li>
                                                                    <span class="description">a</span><em><sub>3</sub></em>
                                                                    <span class="description">=a</span><em><sub>2</sub></em>
                                                                    <span class="description">+d</span>
                                                                </li>
                                                                <li>
                                                                    <span class="description">a</span><em><sub>4</sub></em>
                                                                    <span class="description">=a</span><em><sub>3</sub></em>
                                                                    <span class="description">+d</span>
                                                                </li>
                                                                <li>
                                                                    <span class="description">a</span><em><sub>n</sub></em> 
                                                                    <span class="description"> = a</span><em><sub>(n-1)</sub></em>
                                                                    <span class="description"> + d</span>
                                                                </li>
                                                            </ul>
                                                        </b-col>
                                                        <b-col cols="12" md="4">
                                                            <p style="text-align: left;">Por lo tanto : </p>
                                                            <ul style="text-align: left;">
                                                                <li>
                                                                    <span class="description">d=</span>
                                                                    <span class="description">a</span><em><sub>2</sub></em>
                                                                    <span class="description">-a</span><em><sub>1</sub></em>
                                                                </li>
                                                                <li>
                                                                    <span class="description">d=</span>
                                                                    <span class="description">a</span><em><sub>3</sub></em>
                                                                    <span class="description">-a</span><em><sub>2</sub></em>
                                                                </li>
                                                                <li>
                                                                    <span class="description">d=</span>
                                                                    <span class="description">a</span><em><sub>4</sub></em>
                                                                    <span class="description">-a</span><em><sub>3</sub></em>
                                                                </li>
                                                                <li>
                                                                    <span class="description">d=</span>
                                                                    <span class="description">a</span><em><sub>n</sub></em>
                                                                    <span class="description">-a</span><em><sub>(n-1)</sub></em>
                                                                </li>
                                                            </ul>
                                                        </b-col>
                                                        <b-col cols="12" md="4">
                                                            <p style="text-align: left;">Ejemplo: </p>
                                                            <p class="description">2,5,8,11,14,17...</p>
                                                            <p style="text-align: left;">Entonces:</p>
                                                            <ul style="text-align: left;">
                                                                <li><span class="description">d=</span><span class="description">5 - 2 = 3</span></li>
                                                                <li><span class="description">d=</span><span class="description">8 - 5 = 3</span></li>
                                                            </ul>
                                                            <p style="text-align: left;" class="description">∴ d = 3</p>
                                                        </b-col>
                                                    </b-row>
                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>

                                    <b-card no-body class="mb-1">
                                        <b-card-header header-tag="header" role="tab">
                                            <b-button block v-b-toggle.properties-2 class="btnProperty">Termino N, sabiendo 1°termino</b-button>
                                        </b-card-header>
                                        <b-collapse id="properties-2" accordion="my-accordion1" role="tabpanel">
                                            <b-card-body>
                                                <b-card-text>
                                                    <b-row class="mt-1">
                                                        <b-col cols="12" md="12">
                                                            <p>El término general está dado por la fórmula</p>
                                                            <span class="description">a</span><em><sub>n</sub></em>
                                                            <span class="description"> =  a </span><em><sub>1</sub></em>
                                                            <span class="description"> + (n-1) </span>
                                                            <span>x</span><span class="description"> d</span>
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mt-1">
                                                        <b-col cols="12" md="6">
                                                            <p style="text-align: left;">Ejemplo</p>
                                                            <p class="description">2,5,8,11,14,17...</p>
                                                            <p style="text-align: left;">Sabiendo que el 1° termino es <strong style="color:lime">2</strong></p>
                                                            <p style="text-align: left;">Sabiendo que la diferencia es <strong style="color:blue">3</strong></p>
                                                            <ul style="text-align: left;">
                                                                <li>
                                                                    <span class="description">n </span><em><sub style="color:red">2</sub></em>
                                                                    <span class="description"> = </span>
                                                                    <span class="description" style="color:lime">2</span>
                                                                    <span class="description">+(</span>
                                                                    <span class="description" style="color:red"> 2 </span>
                                                                    <span class="description"> - 1 )</span>
                                                                    <span>x</span><span class="description" style="color:blue"> 3 </span>
                                                                    <span class="description"> = 5</span>
                                                                </li>
                                                                <li>
                                                                    <span class="description">n</span><em><sub style="color:red">3</sub></em>
                                                                    <span class="description"> = </span><span class="description" style="color:lime">2</span>
                                                                    <span class="description">+(</span> 
                                                                    <span class="description" style="color:red"> 3 </span>
                                                                    <span class="description"> - 1 )</span><span>x</span>
                                                                    <span class="description" style="color:blue"> 3 </span>
                                                                    <span class="description"> = 8</span>
                                                                </li>
                                                                <li>...</li>
                                                                <li>
                                                                    <span class="description">n </span><em><sub style="color:red">20</sub></em>
                                                                    <span class="description"> = </span>
                                                                    <span class="description" style="color:lime">2</span>
                                                                    <span class="description">+(</span>
                                                                    <span class="description" style="color:red"> 20 </span>
                                                                    <span class="description">- 1)</span><span>x</span>
                                                                    <span class="description" style="color:blue"> 3 </span>
                                                                    <span class="description"> = 59</span>
                                                                </li>
                                                            </ul>
                                                        </b-col>
                                                        <b-col cols="12" md="6">
                                                            <b-row><b-col><p style="text-align: left;">Ejemplo</p></b-col></b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <span>1° termino : {{examplOne.firstNumber}}</span>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <vue-slider v-model="examplOne.firstNumber" :max="10" :min="1" />
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <span>Diferencia : {{examplOne.difference}}</span>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <vue-slider v-model="examplOne.difference" :max="10" :min="1" />
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <span>valor de N : {{examplOne.numberN}}</span>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <vue-slider v-model="examplOne.numberN" :max="20" :min="1" />
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-1">
                                                                <b-col style="text-align: left;">
                                                                    <span>El termino N ó</span>
                                                                    <span class="description"> n </span><em><sub>{{examplOne.numberN}}</sub></em>
                                                                    <span> es : </span>
                                                                    <strong> {{examplOne.firstNumber + ((examplOne.numberN-1) * examplOne.difference)}}</strong>
                                                                </b-col>
                                                            </b-row>
                                                        </b-col>
                                                    </b-row>

                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>

                                    <b-card no-body>
                                        <b-card-header header-tag="header" role="tab">
                                            <b-button block v-b-toggle.properties-3
                                                class="btnProperty">Termino N, sabiendo 1 termino cualquiera</b-button>
                                        </b-card-header>
                                        <b-collapse id="properties-3" accordion="my-accordion1" role="tabpanel">
                                            <b-card-body>
                                                <b-card-text>
                                                    <b-row class="mt-1">
                                                        <b-col cols="12" md="12">
                                                            <p>El término general está dado por la fórmula</p>
                                                            <span class="description">a</span><em><sub>q</sub></em>
                                                            <span class="description"> = </span>
                                                            <span class="description">a</span><em><sub>p</sub></em>
                                                            <span class="description"> + (q-p) </span>
                                                            <span>x</span>
                                                            <span class="description"> d </span>
                                                        </b-col>
                                                        <b-col cols="12" md="12" class="mt-3">
                                                            <span>Siempre y cuando q > p</span>
                                                        </b-col>
                                                    </b-row>
                                                    <b-row class="mt-4">
                                                        <b-col cols="12" md="6">
                                                            <p style="text-align: left;">Ejemplo</p>
                                                            <span class="description">a</span><em><sub>1</sub></em>
                                                            <span> , </span>
                                                            <span class="description">a</span><em><sub>2</sub></em>
                                                            <span> , </span>
                                                            <span class="description">a</span><em><sub>3</sub></em>
                                                            <span>, ... ,</span>
                                                            <span class="description">a</span><em><sub>6</sub></em>
                                                            <span>, ... ,</span>
                                                            <span class="description">44</span>
                                                            <span> ,..., </span>
                                                            <span class="description">a</span><em><sub>n-2</sub></em>
                                                            <span> , </span>
                                                            <span class="description">a</span><em><sub>n-1</sub></em>
                                                            <span> , </span>
                                                            <span class="description">a</span><em><sub>n</sub></em>
                                                            <p class="mt-3" style="text-align: left;">Sabiendo que el 9° termino es <strong style="color:lime">44</strong></p>
                                                            <p style="text-align: left;">Sabiendo que la diferencia es <strong style="color:blue">5</strong></p>
                                                            <ul style="text-align: left;">
                                                                <li>
                                                                    <span class="description">a</span><em><sub style="color:red">10</sub></em>
                                                                    <span class="description"> = </span>
                                                                    <span class="description" style="color:lime">44</span>
                                                                    <span class="description">+(</span>
                                                                    <span class="description" style="color:red">10</span><span class="description">-9)</span>
                                                                    <span>x</span>
                                                                    <span class="description" style="color:blue">5 </span>
                                                                    <span class="description">= 49</span>
                                                                </li>
                                                                <li>
                                                                    <span class="description">a </span><em><sub style="color:red">13</sub></em>
                                                                    <span class="description">= </span>
                                                                    <span class="description" style="color:lime">44</span> 
                                                                    <span class="description">+(</span>
                                                                    <span class="description" style="color:red">13</span>
                                                                    <span class="description">-9)</span>
                                                                    <span>x</span>
                                                                    <span class="description" style="color:blue">5 </span>
                                                                    <span class="description"> = 64</span>
                                                                </li>
                                                            </ul>
                                                        </b-col>
                                                        <b-col cols="12" md="6">
                                                            <b-row>
                                                                <b-col>
                                                                    <p style="text-align: left;">Ejemplo</p>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <span>Sabiendo que:</span>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <span>Termino</span>
                                                                    <span class="description">a</span><em><sub>{{exampleTwo.numberN}}</sub></em>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <vue-slider v-model="exampleTwo.numberN" :max="10" :min="1" />
                                                                </b-col>
                                                            </b-row>

                                                            <b-row>
                                                                <b-col>
                                                                    <span>El valor de <span class="description">a</span><em><sub>{{exampleTwo.numberN}}</sub></em>
                                                                        = {{exampleTwo.valueOfNumberN}}</span>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <vue-slider v-model="exampleTwo.valueOfNumberN" :max="200" :min="1" />
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <span>Diferencia : {{exampleTwo.difference}}</span>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <vue-slider v-model="exampleTwo.difference" :max="10" :min="1" />
                                                                </b-col>
                                                            </b-row>

                                                            <b-row class="mt-1">
                                                                <b-col style="text-align: left;"> 
                                                                    <span>Hallar el termino {{exampleTwo.findNumberN}} ó</span>
                                                                    <span class="description">n</span><em><sub>{{exampleTwo.findNumberN}}</sub></em>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    <vue-slider v-model="exampleTwo.findNumberN" :max="20" :min="11" />
                                                                </b-col>
                                                            </b-row>
                                                            <b-row>
                                                                <b-col>
                                                                    El valor es : {{exampleTwo.valueOfNumberN + ((exampleTwo.findNumberN-exampleTwo.numberN)*exampleTwo.difference)}}
                                                                </b-col>
                                                            </b-row>
                                                        </b-col>
                                                    </b-row>
                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    export default {
        name: 'ArithmeticProgressionComponent',
        data() {
            return {
                examplOne: {
                    firstNumber: 2,
                    difference: 3,
                    numberN: 4
                },
                exampleTwo: {
                    numberN: 9,
                    valueOfNumberN: 44,
                    difference: 5,
                    findNumberN: 13
                }
            }
        },
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