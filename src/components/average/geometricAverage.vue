<template>
    <div>
        <b-row>
            <b-col cols="12">
                <p style="text-align: left;">El promedio geométrico o media geométrica se obtiene al extraer la raíz «n»
                    del producto de los «n» datos. </p>
            </b-col>
            <b-col cols="12">
                <p style="text-align: left;">Dados los números:</p>
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
                    <b-col cols="12">
                        <p style="text-align: left;">La media geometrica se calcula :</p>
                    </b-col>
                    <b-col cols="12">
                        <b-row>
                            <b-col sm="4" md="4" lg="4" class="mb-3">
                                <span class="description">M.G. = </span>
                            </b-col>
                            <b-col sm="8" md="8" lg="8">
                                <b-row>
                                    <b-col>
                                        <sup>(cantidad de números)</sup><span>√</span>
                                        <span class="numberProduct">Producto de los números</span>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col sm="4" md="4" lg="4" class="mb-3">
                                <span class="description">M.G. = </span>
                            </b-col>
                            <b-col sm="8" md="8" lg="8">
                                <b-row>
                                    <b-col>
                                        <sup>n</sup><span>√</span>
                                        <span style="border-top: 1px black solid;padding-top: 4px;">
                                            <span class="description">a</span><em><sub>1</sub></em>
                                            <span class="description"> <em><sub> x </sub></em> a </span><em><sub>2</sub></em>
                                            <span class="description"> <em><sub> x </sub></em>.. </span>
                                            <span class="description"> <em><sub> x </sub></em> a </span><em><sub>n-1</sub></em>
                                            <span class="description"> <em><sub> x </sub></em> a </span><em><sub>n</sub></em>
                                        </span>
                                        
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" class="mt-4">
                <p style="text-align: left;">Ejemplo , tenemos la siguiente lista de números
                    {{numbers.join(',')}}</p>
            </b-col>
            <b-col cols="12">
                <!-- <draggable v-model="numbers"> -->
                    <div v-for="(value, index) in numbers" :key="index" class="draggableNumber">
                        <b-row>
                            <b-col>
                                <!-- <b-icon :id="'numbers' + index" icon="arrows-move" class="moveNumber"></b-icon> -->
                                <span>{{numbers[index]}}</span>

                                <b-icon v-if="numbers.length<11" icon="plus-circle" class="removeNumber right ml-2"
                                 @click="addNumber"> </b-icon>
                                <b-icon v-if="numbers.length>2" icon="trash" class="removeNumber"
                                    @click="removeNumber(index)"></b-icon>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <vue-slider v-model="numbers[index]" />
                            </b-col>
                        </b-row>
                        <!-- <b-tooltip v-if="numbers.length>1" :target="'numbers' + index"
                            title="Puedes cambiar el orden, solo arrastrame arriba o abajo" /> -->
                    </div>
                <!-- </draggable> -->
            </b-col>
            <b-col cols="12">
                <p style="text-align: left;">Solución :</p>
                <p style="text-align: left;">Tendriamos los números {{numbers.join(',')}}, el producto de ellos es : {{productValue}}</p>
                <p style="text-align: left;">Tendriamos la cantidad de números {{numbers.length}}</p>
                <p style="text-align: left;">Tendriamos que sacar la raiz : <sup>{{numbers.length}}</sup> <span>√</span> <span style="border-top:1px solid">{{productValue}}</span></p>
                <p style="text-align: left;">=> la M.G. <span> {{isInexact?"≈":"="}} </span>  {{ getGeometricAverage().toFixed(4)}}</p>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    // import draggable from 'vuedraggable'
    import { mathHelper } from '@/helpers';
    export default {
        name: 'GeometricAveragenComponent',
        // components: { draggable },
        data() {
            return {
                numbers: [6, 4, 9],
                isInexact : false
            }
        },
        methods: {
            addNumber() {
                    this.numbers.push(mathHelper.getRandomNumber());
            },
            removeNumber(index) {
                this.numbers.splice(index, 1);
            },
            getGeometricAverage () {
               let product =  this.productValue;
               let average = Math.pow(product,1/this.numbers.length)
               let decimals = this.countDecimals(average);
               this.isInexact= decimals > 2;
               return average;
            },
            countDecimals(number) {
                if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
                return number.toString().split(".")[1].length || 0;
            }
        },
        computed: {
            productValue(){
                let value = 1 ;
                this.numbers.forEach(element => {
                    value *= element;
                });
                return value
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

    .numberProduct {
        border-top: 1px solid;
        font-size: 20px;
    }

    .draggableNumber {
        border: 1px solid #ced4da;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        background-color: white;
    }

    .moveNumber {
        height: 100%;
        float: left;
    }

    .removeNumber {
        height: 100%;
        float: right;
    }

    @media (max-width:767px) {
        .numberProduct {
            font-size: 13px;
        }
    }
    
</style>