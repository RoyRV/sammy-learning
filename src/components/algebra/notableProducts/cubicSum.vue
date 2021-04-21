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
                                        valor del cubo de la suma de ellos, es decir (a+b)<sup>3</sup></p>
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
                        <b-tab title="Demostración">
                            <b-row class="mt-4">
                                <b-col cols="12">
                                    <p style="text-align: left;">
                                        Imaginemos que tenemos un cubo que tiene las aristas formado por las partes :
                                        <span class="description"> a </span> y <span class="description"> b</span>
                                    </p>
                                </b-col>
                                <b-col cols="12">
                                    <b-img src="/assets/algebra/suma_al_cubo.png" fluid />
                                </b-col>
                                <b-col cols="12">
                                    <p style="text-align: left;">
                                        Ahora empezamos a calcular el volumen del cuadrado multiplicando sus lados</p>
                                        <p style="text-align: left;">Por lo cual empezamos a ver los valores de los volumenes como :</p>
                                    <p>
                                        <span class="description"> = a<em><sub> x </sub></em>a<em><sub> x </sub></em>a</span>
                                        <span class="description"> + 3<em><sub> x </sub></em> b<em><sub> x </sub></em>a<sup>2</sup></span>
                                        <span class="description"> + 3<em><sub> x </sub></em> a<em><sub> x </sub></em>b<sup>2</sup></span>
                                        <span class="description"> + b<em><sub> x </sub></em>b<em><sub> x </sub></em>b</span>
                                    </p>
                                    <p>
                                        <span class="description">=> ( a + b ) <sup>3</sup></span>
                                        <span class="description"> = a<sup>3</sup></span>
                                        <span class="description"> + 3a<sup>2</sup>b</span>
                                        <span class="description"> + 3b<sup>2</sup>a</span>
                                        <span class="description"> + b<sup>3</sup></span>
                                    </p>
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
                                            <vue-slider v-model="primerFactor" :max="50" :min="1" />
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
                                            <vue-slider v-model="segundoFactor" :max="50" :min="1" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-4">
                                        <b-col>
                                            <span>Segundo Factor : {{segundoFactor}}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col cols="12" style="text-align: left;">
                                    <p>Teniendo estas aristas , la arista total del cubo seria {{ primerFactor +
                                        segundoFactor}} </p>
                                        <p>
                                            Si resolvemos la ecuación por producto notable seria
                                            <span> {{primerFactor}} <sup>3</sup></span>
                                            <span> + 3 <em><sub>x</sub></em> {{primerFactor}} <sup>2</sup> <em><sub>x</sub></em> {{segundoFactor}}</span>
                                            <span> + 3 <em><sub>x</sub></em> {{primerFactor}} <em><sub>x</sub></em> {{segundoFactor}} <sup>2</sup> </span>
                                            <span> + {{segundoFactor}} <sup>3</sup></span>
                                        </p>
                                        <p>
                                            =>
                                            <span> {{primerFactor * primerFactor * primerFactor}}</span>
                                            <span> + {{3 * primerFactor * primerFactor * segundoFactor}}</span>
                                            <span> + {{3 * primerFactor * segundoFactor * segundoFactor}} </span>
                                            <span> + {{segundoFactor * segundoFactor * segundoFactor}}</span>
                                            <span> = {{ Math.pow((primerFactor+segundoFactor),3)}}</span>
                                        </p>

                                        <p>
                                            Si resolvemos la ecuación por suma al cubo sería
                                            <span> ( {{primerFactor}} + {{segundoFactor}} )  <sup>3</sup></span>
                                        </p>
                                        <p>
                                            Si resolvemos la ecuación por suma al cubo sería
                                            <span> ( {{primerFactor + segundoFactor}} )  <sup>3</sup></span>
                                            => <span>{{primerFactor + segundoFactor}}</span> <em><sub> x </sub></em>
                                            <span> {{primerFactor + segundoFactor}} </span> <em><sub> x </sub></em>
                                            <span> {{primerFactor + segundoFactor}} </span>
                                            <span> = {{ Math.pow((primerFactor+segundoFactor),3)}}</span>
                                        </p>
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
        name: 'CubicSum',
        data() {
            return {
                primerFactor: 4,
                segundoFactor: 5
            }
        },
    }
</script>
<style scoped>

</style>