<template>
    <div>
        <b-tabs>
            <b-tab title="Explicación" active>
                <b-row class="mt-1">
                    <b-col cols="12" style="text-align:left;">
                        <h3>Definición :</h3>
                        <span>
                            Una progresión geométrica es una sucesión de números reales llamados términos, en la que
                            cada término (excepto el primero) se obtiene multiplicando el término anterior por una
                            constante denominada razón o factor de la progresión
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
            <b-tab title="Propiedades">
                <b-row>
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
                    <b-col cols="12">
                        <b-row>
                            <b-col>
                                <span>Una progresión geometrica hemos dicho que cada término (excepto el primero, a1)
                                    se obtiene multiplicando al anterior por la razón, que vamos a designar con la letra
                                    <strong><i>r</i></strong></span><br />
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="mt-4">
                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.properties-1 class="btnProperty">La Razón</b-button>
                                    </b-card-header>
                                    <b-collapse id="properties-1" accordion="my-accordion1" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>
                                                <b-row class="mt-1">
                                                    <b-col cols="12" md="4">
                                                        <p style="text-align: left;">Se deduce que: </p>
                                                        <ul style="text-align: left;">
                                                            <li>
                                                                <span class="description">a</span><em><sub>2</sub></em>
                                                                <span class="description">=a</span><em><sub>1</sub></em>
                                                                <span class="description"><em><sub> x</sub></em>
                                                                    r</span>
                                                            </li>
                                                            <li>
                                                                <span class="description">a</span><em><sub>3</sub></em>
                                                                <span class="description">=a</span><em><sub>2</sub></em>
                                                                <span class="description"><em><sub> x</sub></em>
                                                                    r</span>
                                                            </li>
                                                            <li>
                                                                <span class="description">a</span><em><sub>4</sub></em>
                                                                <span class="description">=a</span><em><sub>3</sub></em>
                                                                <span class="description"><em><sub> x</sub></em>
                                                                    r</span>
                                                            </li>
                                                            <li>
                                                                <span class="description">a</span><em><sub>n</sub></em>
                                                                <span class="description"> =
                                                                    a</span><em><sub>(n-1)</sub></em>
                                                                <span class="description"><em><sub> x</sub></em>
                                                                    r</span>
                                                            </li>
                                                        </ul>
                                                    </b-col>
                                                    <b-col cols="12" md="4">
                                                        <p style="text-align: left;">Por lo tanto : </p>
                                                        <ul style="text-align: left;">
                                                            <li>
                                                                <span class="description">r=</span>
                                                                <span class="description">a</span><em><sub>2</sub></em>
                                                                <span class="description">/a</span><em><sub>1</sub></em>
                                                            </li>
                                                            <li>
                                                                <span class="description">r=</span>
                                                                <span class="description">a</span><em><sub>3</sub></em>
                                                                <span class="description">/a</span><em><sub>2</sub></em>
                                                            </li>
                                                            <li>
                                                                <span class="description">r=</span>
                                                                <span class="description">a</span><em><sub>4</sub></em>
                                                                <span class="description">/a</span><em><sub>3</sub></em>
                                                            </li>
                                                            <li>
                                                                <span class="description">r=</span>
                                                                <span class="description">a</span><em><sub>n</sub></em>
                                                                <span
                                                                    class="description">/a</span><em><sub>(n-1)</sub></em>
                                                            </li>
                                                        </ul>
                                                    </b-col>
                                                    <b-col cols="12" md="4">
                                                        <p style="text-align: left;">Ejemplo: </p>
                                                        <p class="description">2,6,18,54,162,...</p>
                                                        <p style="text-align: left;">Entonces:</p>
                                                        <ul style="text-align: left;">
                                                            <li><span class="description">r = </span><span
                                                                    class="description">6 / 2 = 3</span></li>
                                                            <li><span class="description">r = </span><span
                                                                    class="description">18 / 6 = 3</span></li>
                                                        </ul>
                                                        <p style="text-align: left;" class="description">∴ r = 3</p>
                                                    </b-col>
                                                </b-row>
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.properties-2 class="btnProperty">Termino N, sabiendo
                                            1°termino</b-button>
                                    </b-card-header>
                                    <b-collapse id="properties-2" accordion="my-accordion1" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>
                                                <b-row class="mt-1">
                                                    <b-col cols="12" md="12">
                                                        <p>El término general está dado por la fórmula</p>
                                                        <span class="description">a</span><em><sub>n</sub></em>
                                                        <span class="description"> = a </span><em><sub>1</sub></em>
                                                        <span class="description"> <em><sub> x</sub></em>
                                                            r<sup> (n-1)</sup> </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="mt-1">
                                                    <b-col cols="12" md="6">
                                                        <p style="text-align: left;">Ejemplo</p>
                                                        <p class="description">2,6,18,54,162,...</p>
                                                        <p style="text-align: left;">Sabiendo que el 1° termino es
                                                            <strong style="color:lime">2</strong></p>
                                                        <p style="text-align: left;">Sabiendo que la razón es <strong
                                                                style="color:blue">3</strong></p>
                                                        <ul style="text-align: left;">
                                                            <li>
                                                                <span class="description">n </span><em><sub
                                                                        style="color:red">2</sub></em>
                                                                <span class="description"> = </span>
                                                                <span class="description" style="color:lime">2</span>
                                                                <span class="description"> <em><sub>
                                                                            x</sub></em>(</span>
                                                                <span class="description" style="color:blue"> 3 </span>
                                                                <span class="description">)<sup>( <span
                                                                            style="color:red">2</span>-1)</sup></span>
                                                                <span class="description"> = 6</span>
                                                            </li>
                                                            <li>
                                                                <span class="description">n </span><em><sub
                                                                        style="color:red">3</sub></em>
                                                                <span class="description"> = </span>
                                                                <span class="description" style="color:lime">2</span>
                                                                <span class="description"> <em><sub>
                                                                            x</sub></em>(</span>
                                                                <span class="description" style="color:blue"> 3 </span>
                                                                <span class="description">)<sup>( <span
                                                                            style="color:red">3</span>-1)</sup></span>
                                                                <span class="description"> = 18</span>
                                                            </li>
                                                            <li>...</li>
                                                            <li>
                                                                <span class="description">n </span><em><sub
                                                                        style="color:red">10</sub></em>
                                                                <span class="description"> = </span>
                                                                <span class="description" style="color:lime">2</span>
                                                                <span class="description"> <em><sub>
                                                                            x</sub></em>(</span>
                                                                <span class="description" style="color:blue"> 3 </span>
                                                                <span class="description">)<sup>( <span
                                                                            style="color:red">10</span>-1)</sup></span>
                                                                <br />
                                                                <span class="description">= 39366</span>
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
                                                                <span>1° termino : {{examplOne.firstNumber}}</span>
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="examplOne.firstNumber" :max="10"
                                                                    :min="1" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>La razón : {{examplOne.constant}}</span>
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="examplOne.constant" :max="10"
                                                                    :min="1" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>valor de N : {{examplOne.NValue}}</span>
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="examplOne.NValue" :max="20"
                                                                    :min="1" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row class="mt-1">
                                                            <b-col style="text-align: left;">
                                                                <span>El termino N ó</span>
                                                                <span class="description"> n
                                                                </span><em><sub>{{examplOne.NValue}}</sub></em>
                                                                <span> es : </span>
                                                                <strong> {{examplOne.firstNumber *
                                                                    Math.pow(examplOne.constant,(examplOne.NValue-1))
                                                                    }}</strong>
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
                                        <b-button block v-b-toggle.properties-3 class="btnProperty">Termino N, sabiendo
                                            1 termino cualquiera</b-button>
                                    </b-card-header>
                                    <b-collapse id="properties-3" accordion="my-accordion1" role="tabpanel">
                                        <b-card-body>
                                            <b-row class="mt-1">
                                                <b-col cols="12" md="12">
                                                    <p>El término general está dado por la fórmula</p>
                                                    <span class="description">a</span><em><sub>m</sub></em>
                                                    <span class="description"> = </span>
                                                    <span class="description">a</span><em><sub>p</sub></em>
                                                    <span class="description"> <em><sub> x</sub></em> (r)<sup>(m -p)</sup> </span>
                                                </b-col>
                                                <b-col cols="12" md="12" class="mt-3">
                                                    <span>Siempre y cuando m > p</span>
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
                                                    <span class="description">162</span>
                                                    <span> ,..., </span>
                                                    <span class="description">a</span><em><sub>n-2</sub></em>
                                                    <span> , </span>
                                                    <span class="description">a</span><em><sub>n-1</sub></em>
                                                    <span> , </span>
                                                    <span class="description">a</span><em><sub>n</sub></em>
                                                    <p class="mt-3" style="text-align: left;">Sabiendo que el 6° termino es <strong style="color:lime">162</strong></p>
                                                    <p style="text-align: left;">Sabiendo que la razón es <strong style="color:blue">3</strong></p>
                                                    <ul style="text-align: left;">
                                                        <li>
                                                            <span class="description">a</span><em><sub style="color:red">8</sub></em>
                                                            <span class="description"> = </span>
                                                            <span class="description" style="color:lime">162</span>
                                                            <span class="description"> <em><sub> x</sub></em></span> 
                                                            <span class="description" style="color:blue">(3)</span>
                                                            <span class="description"><sup> (<span style="color:red">8 </span>- 6)</sup> </span>
                                                        </li>

                                                        <li>
                                                            <span class="description">a</span><em><sub style="color:red">12</sub></em>
                                                            <span class="description"> = </span>
                                                            <span class="description" style="color:lime">162</span>
                                                            <span class="description"> <em><sub> x</sub></em></span> 
                                                            <span class="description" style="color:blue">(3)</span>
                                                            <span class="description"><sup> (<span style="color:red">12 </span>- 6)</sup> </span>
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
                                                            <span>Termino </span>
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
                                                    </b-row> <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="exampleTwo.valueOfNumberN" :max="1000" :min="1" />
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col>
                                                            <span>Razón : {{exampleTwo.constant}}</span>
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col>
                                                            <vue-slider v-model="exampleTwo.constant" :max="10" :min="1" />
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
                                                            <span class="description">a</span><em><sub style="color:red">{{exampleTwo.findNumberN}}</sub></em>
                                                            <span class="description"> = </span>
                                                            <span class="description" style="color:lime">{{exampleTwo.valueOfNumberN}}</span>
                                                            <span class="description"> <em><sub> x</sub></em></span> 
                                                            <span class="description" style="color:blue">({{exampleTwo.constant}})</span>
                                                            <span class="description"><sup> (<span style="color:red">{{exampleTwo.findNumberN}} </span>- {{exampleTwo.numberN}})</sup> </span>
                                                        </b-col>
                                                    </b-row>
                                                    <b-row>
                                                        <b-col>
                                                            El valor es : {{exampleTwo.valueOfNumberN * Math.pow(exampleTwo.constant,(exampleTwo.findNumberN-exampleTwo.numberN))}}
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.properties-4 class="btnProperty">Sumatoria
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="properties-4" accordion="my-accordion1" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text>
                                                <b-row class="mt-1">
                                                    <b-col cols="12" md="12">
                                                        <p>La sumatoria esta dada por 2 formulas dependiendo de los
                                                            datos conocidos</p>
                                                    </b-col>
                                                    <b-col cols="12" md="6">
                                                        <b-row>
                                                            <b-col cols="12">
                                                                <span class="description">Σ <em><sub>n</sub></em> = </span>
                                                                <span class="description">a</span><em><sub>1</sub></em>
                                                                <span class="description"><em><sub> x</sub></em>
                                                                    [(r<sup> n</sup> - 1) / (r - 1)]</span>
                                                            </b-col>
                                                            <b-col class="mt-3" cols="12" style="text-align: left;">
                                                                <span>
                                                                    Necesitamos saber los datos como :
                                                                    <ul class="mt-2">
                                                                        <li>el 1° termino</li>
                                                                        <li>el valor de n</li>
                                                                        <li>el valor de la rázon</li>
                                                                    </ul>
                                                                </span>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                    <b-col cols="12" md="6">
                                                        <b-row>
                                                            <b-col cols="12">
                                                                <span class="description">Σ <em><sub>n</sub></em> = </span>
                                                                <span class="description">a</span><em><sub>n</sub></em>
                                                                <span class="description"><em><sub> x</sub></em></span>
                                                                <span class="description">[(r - a</span><em><sub>1</sub></em>
                                                                <span class="description">) / (r - 1)]</span> 
                                                            </b-col>
                                                            <b-col class="mt-3" cols="12" style="text-align: left;">
                                                                <span>
                                                                    Necesitamos saber los datos como :
                                                                    <ul class="mt-2">
                                                                        <li>el 1° termino</li>
                                                                        <li>el valor del termino enesimo</li>
                                                                        <li>el valor de la rázon</li>
                                                                    </ul>
                                                                </span>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col> 
                                                </b-row>
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
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
        name: 'GeometricProgressionComponent',
        data() {
            return {
                examplOne: {
                    firstNumber: 2,
                    constant: 3,
                    NValue: 4
                },
                exampleTwo: {
                    numberN: 9,
                    valueOfNumberN: 44,
                    constant: 5,
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
    @media(max-width:504px) {
        p {
            font-size: 13px;
        }

        .description {
            font-size: 20px;
        }
    }
</style>