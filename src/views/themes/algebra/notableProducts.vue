<template>
    <div>
        <b-row>
            <b-col cols="12">
                <h2>Productos Notables</h2>
            </b-col>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-0 variant="info">Introducción</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-0" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" style="text-align: left;">
                                            <p>Sabemos que se llama producto al resultado de una multiplicación. También
                                                sabemos que los valores que se multiplican se llaman factores .</p>
                                            <p>Se llama productos notables a ciertas expresiones algebraicas que se
                                                encuentran frecuentemente y que es preciso saber factorizarlas a simple
                                                vista; es decir, sin necesidad de hacerlo paso por paso.</p>
                                            <p>Se les llama productos notables (también productos especiales )
                                                precisamente porque son muy utilizados en los ejercicios.</p>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Cuadrado de la suma de dos cantidades
                                o binomio cuadrado
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel" active>
                            <b-card-body>
                                <b-card-text>
                                    <b-tabs>
                                        <b-tab title="Explicación" active>
                                            <b-row>
                                                <b-col cols="12">
                                                    <p style="text-align: left;">Dado dos números , a y b , y queremos encontrar el valor del cuadrado de la suma de ellos, es decir (a+b)<sup>2</sup></p>
                                                    <p style="text-align: left;">Como ya sabemos, la exponenciación es multiplicar el mismo valor x si mismo <strong>n</strong> veces, en este caso 2</p>
                                                    <p>
                                                        <span class="description">( a + b ) <sup>2</sup></span>
                                                        <span class="description"> = ( a + b ) <em><sub>x</sub></em> ( a + b )</span>
                                                    </p>
                                                    <p style="text-align: left;">Se opera el producto aplicando la tecnica de multiplicacion en cada miembro</p>
                                                    <p>
                                                        <span class="description"> = a<em><sub> x </sub></em>a</span>
                                                        <span class="description"> + b<em><sub> x </sub></em>a</span>
                                                        <span class="description"> + a<em><sub> x </sub></em>b  </span>
                                                        <span class="description"> + b<em><sub> x </sub></em>b</span>
                                                    </p>
                                                    <p>
                                                        <span class="description"> = a<sup>2</sup> </span>
                                                        <span class="description"> + a<em><sub> x </sub></em>b</span>
                                                        <span>(el orden de los productos no afecta el resultado)</span>
                                                        <span class="description"> + a<em><sub> x </sub></em>b  </span>
                                                        <span class="description"> + b<sup>2</sup> </span>
                                                    </p>
                                                </b-col>
                                                <b-col cols="12" class="mt-2">
                                                    <span class="description">=> ( a + b ) <sup>2</sup></span>
                                                    <span class="description"> = a<sup>2</sup></span>
                                                    <span class="description"> + 2ab</span>
                                                    <span class="description"> + b<sup>2</sup></span>
                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                        <b-tab title="Demostración" >
                                            <b-row class="mt-4">
                                                <b-col cols="12">
                                                    <p style="text-align: left;">
                                                        Imaginemos que tenemos un cuadrado que tiene un lado formado por las partes : 
                                                        <span class="description"> a </span> y <span class="description"> b</span>
                                                    </p>
                                                </b-col>
                                                <b-col cols="12">
                                                    <b-img src="/assets/algebra/Binomio_al_cuadrado.png" fluid/>
                                                </b-col>
                                                <b-col cols="12">
                                                    <p style="text-align: left;">
                                                        Ahora empezamos a calcular cada área del cuadrado multiplicando sus lados</p>
                                                    <p>Por lo cual empezamos a ver los valores de las áreas como :</p>
                                                    <p>
                                                        <span class="description"> = a<em><sub> x </sub></em>a</span>
                                                        <span class="description"> + b<em><sub> x </sub></em>a</span>
                                                        <span class="description"> + a<em><sub> x </sub></em>b  </span>
                                                        <span class="description"> + b<em><sub> x </sub></em>b</span>
                                                    </p>
                                                    <p>
                                                        <span class="description">=> ( a + b ) <sup>2</sup></span>
                                                        <span class="description"> = a<sup>2</sup></span>
                                                        <span class="description"> + 2ab</span>
                                                        <span class="description"> + b<sup>2</sup></span>
                                                    </p>
                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                        <b-tab title="Ejemplos" >
                                            <b-row>
                                                <b-col cols="12">
                                                    
                                                </b-col>
                                            </b-row>
                                        </b-tab>
                                    </b-tabs>                                   
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
        name: 'NotableProducts'
    }
</script>
<style>
    .description {
        font-family: "MathJax_Math-italic";
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 35px;
    }

    @media (max-width:760px) {
        .description {
            font-size: 25px;
        }
    }
</style>