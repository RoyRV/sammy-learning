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
                                    se obtiene multiplicando al anterior por la razón, que vamos a designar con la letra <strong><i>r</i></strong></span><br />
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="mt-4">
                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" role="tab">
                                        <b-button block v-b-toggle.properties-1
                                            class="btnProperty">La Razón</b-button>
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
                                                                <span class="description"><em><sub> x</sub></em> r</span>
                                                            </li>
                                                            <li>
                                                                <span class="description">a</span><em><sub>3</sub></em>
                                                                <span class="description">=a</span><em><sub>2</sub></em>
                                                                <span class="description"><em><sub> x</sub></em> r</span>
                                                            </li>
                                                            <li>
                                                                <span class="description">a</span><em><sub>4</sub></em>
                                                                <span class="description">=a</span><em><sub>3</sub></em>
                                                                <span class="description"><em><sub> x</sub></em> r</span>
                                                            </li>
                                                            <li>
                                                                <span class="description">a</span><em><sub>n</sub></em> 
                                                                <span class="description"> = a</span><em><sub>(n-1)</sub></em>
                                                                <span class="description"><em><sub> x</sub></em> r</span>
                                                            </li>
                                                        </ul>
                                                    </b-col> <b-col cols="12" md="4">
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
                                                                <span class="description">/a</span><em><sub>(n-1)</sub></em>
                                                            </li>
                                                        </ul>
                                                    </b-col>
                                                    <b-col cols="12" md="4">
                                                        <p style="text-align: left;">Ejemplo: </p>
                                                        <p class="description">2,6,18,54,162,...</p>
                                                        <p style="text-align: left;">Entonces:</p>
                                                        <ul style="text-align: left;">
                                                            <li><span class="description">r = </span><span class="description">6 / 2 = 3</span></li>
                                                            <li><span class="description">r = </span><span class="description">18 / 6 = 3</span></li>
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
                                                        <span class="description"> <em><sub> x</sub></em> (r)<sup>(n-1)</sup> </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row class="mt-1">
                                                    <b-col cols="12" md="6">
                                                        <p style="text-align: left;">Ejemplo</p>
                                                        <p class="description">2,6,18,54,162,...</p>
                                                        <p style="text-align: left;">Sabiendo que el 1° termino es <strong style="color:lime">2</strong></p>
                                                        <p style="text-align: left;">Sabiendo que la razón es <strong style="color:blue">3</strong></p>
                                                        <ul style="text-align: left;">
                                                            <li>
                                                                <span class="description">n </span><em><sub style="color:red">2</sub></em>
                                                                <span class="description"> = </span>
                                                                <span class="description" style="color:lime">2</span>
                                                                <span class="description"> <em><sub> x</sub></em>(</span>
                                                                <span class="description" style="color:blue"> 3 </span>
                                                                <span class="description" >)<sup>( <span style="color:red">2</span>-1)</sup></span>
                                                                <span class="description"> = 6</span>
                                                            </li>
                                                            <li>
                                                                <span class="description">n </span><em><sub style="color:red">3</sub></em>
                                                                <span class="description"> = </span>
                                                                <span class="description" style="color:lime">2</span>
                                                                <span class="description"> <em><sub> x</sub></em>(</span>
                                                                <span class="description" style="color:blue"> 3 </span>
                                                                <span class="description" >)<sup>( <span style="color:red">3</span>-1)</sup></span>
                                                                <span class="description"> = 18</span>
                                                            </li>
                                                            <li>...</li>
                                                            <li>
                                                                <span class="description">n </span><em><sub style="color:red">10</sub></em>
                                                                <span class="description"> = </span>
                                                                <span class="description" style="color:lime">2</span>
                                                                <span class="description"> <em><sub> x</sub></em>(</span>
                                                                <span class="description" style="color:blue"> 3 </span>
                                                                <span class="description" >)<sup>( <span style="color:red">10</span>-1)</sup></span>
                                                                <br/>
                                                                <span class="description">= 39366</span>
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
                                                                <span>La razón : {{examplOne.constant}}</span>
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="examplOne.constant" :max="10" :min="1" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>valor de N : {{examplOne.NValue}}</span>
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="examplOne.NValue" :max="20" :min="1" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row class="mt-1">
                                                            <b-col style="text-align: left;">
                                                                <span>El termino N ó</span>
                                                                <span class="description"> n </span><em><sub>{{examplOne.NValue}}</sub></em>
                                                                <span> es : </span>
                                                                <strong> {{examplOne.firstNumber * Math.pow(examplOne.constant,(examplOne.NValue-1)) }}</strong>
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