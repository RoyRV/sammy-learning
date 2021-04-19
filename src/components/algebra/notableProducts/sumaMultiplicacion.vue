<template>
    <b-card no-body class="mb-1">
        <b-card-header header-tag="header" role="tab">
            <b-button block v-b-toggle.accordion-4 variant="info">x ( a + b ) </b-button>
        </b-card-header>
        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel" >
            <b-card-body>
                <b-card-text>
                    <b-tabs>
                        <b-tab title="Explicación" active>
                            <b-row>
                                <b-col cols="12">
                                    <p style="text-align: left;">Dado dos números  a , b y c ; Donde los terminos a y b están sumandose y están expuestos a una multiplicación </p>
                                    <p>
                                        <span class="description"> ( a + b ) </span>
                                        <span class="description"> <em><sub> x </sub></em></span>
                                        <span class="description"> c </span>
                                    </p>
                                    <p style="text-align: left;">El factor de la multiplicación se efectua sobre cada termino </p>
                                    <p>
                                        <span class="description"> c <em><sub> x </sub></em> a + </span>
                                        <span class="description"> c <em><sub> x </sub></em> b </span>
                                    </p>
                                </b-col>
                                <b-col cols="12">
                                    <p style="text-align: left;">
                                        Imaginemos que tenemos un rectangulo que tiene un lado en función de a + b y el otro lado vale C :
                                    </p>
                                </b-col>
                                <b-col cols="12">
                                    <b-img src="/assets/algebra/factorComun.png" fluid />
                                </b-col>
                                <b-col cols="12">
                                    <p style="text-align: left;">
                                        Lo importante de este producto notable es q podemos utilizarlo para hacer el proceso inverso, verificar que tienen en comun ambas partes para poder "factorizar"
                                    </p>
                                </b-col>
                            </b-row>
                        </b-tab>
                        <b-tab title="Ejemplos">
                            <b-row class="mt-3">
                                <b-col cols="12" style="text-align: left;">
                                    <p>Ejemplo : </p>
                                </b-col>
                                <b-col md="4" sm="12">
                                    <b-row>
                                        <b-col>
                                            <vue-slider v-model="primerFactor" :max="50" :min="1" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-4">
                                        <b-col>
                                            <span>Primer Factor : {{primerFactor}}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col md="4" sm="12">
                                    <b-row>
                                        <b-col>
                                            <vue-slider v-model="segundoFactor" :max="50" :min="1" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-4">
                                        <b-col>
                                            <span>Segundo Factor : {{segundoFactor}}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col md="4" sm="12">
                                    <b-row>
                                        <b-col>
                                            <vue-slider v-model="factorComun" :max="50" :min="1" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-4">
                                        <b-col>
                                            <span>Factor Común : {{factorComun}}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col cols="12" style="text-align: left;">
                                    <p> Teniendo la siguiente expresión : <span class="description"> ( a + b ) <em><sub> x </sub></em> c </span> 
                                    </p>
                                    <p>
                                        .... Esto tambien se podría expresar como la suma de ambos factores afectados por la multiplicación
                                        <span class="description"> a  <em><sub> x </sub></em> c  + b <em><sub> x </sub></em> c </span> 
                                    </p>
                                    <p> Esto sería igual a  : ( {{primerFactor}} + {{segundoFactor}}  )  <em><sub> x </sub></em>  {{factorComun}} 
                                        ... esto tambien podria expresarse como  ( {{primerFactor}} <em><sub> x </sub></em> {{factorComun}}  )  
                                       + ( {{segundoFactor}} <em><sub> x </sub></em> {{factorComun}} ) 
                                    </p>

                                    <p>=> de la suma obtendriamos {{primerFactor + segundoFactor}} <em><sub> x </sub></em>  {{factorComun}} 
                                        ... esto tambien podria expresarse como  ( {{primerFactor * factorComun}}  )  
                                        + ( {{segundoFactor * factorComun}} ) 
                                    </p>
                                    <p>=> de la multiplicacion obtendriamos {{(primerFactor + segundoFactor) * factorComun}} 
                                        ... del resultado de la suma obtendriamos  ( {{(primerFactor + segundoFactor) * factorComun}} ) 
                                    </p>
                                    <p>En ambos casos obtenemos el mismo valor, por lo cual confirmamos que el desarrollo es correcto</p>
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
    export default {
        name : 'SumaMultiplicacion',
        data() {
            return {
                primerFactor: 3,
                segundoFactor: 8,
                factorComun : 4
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
        font-size: 25px;
    }
</style>