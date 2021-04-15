<template>
    <div>
        <b-row>
            <b-col cols="12">
                <p style="text-align: left;">Cuando los datos tienen un valor (importancia) que se denomina «peso». El
                    promedio es la suma del producto de los datos y su peso, luego se divide entre la suma de pesos.</p>
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
                <p style="text-align: left;">Ahora consideremos que cada número tiene un Peso:</p>
                <p>
                    <span class="description">p</span><em><sub>1</sub></em>
                    <span class="description"> , p </span><em><sub>2</sub></em>
                    <span class="description"> , p </span><em><sub>3</sub></em>
                    <span class="description"> , p </span><em><sub>4</sub></em>
                    <span class="description"> ... </span>
                    <span class="description"> , p </span><em><sub>n-2</sub></em>
                    <span class="description"> , p </span><em><sub>n-1</sub></em>
                    <span class="description"> , p </span><em><sub>n</sub></em>
                </p>
            </b-col>
            <b-col cols="12">
                <b-row>
                    <b-col cols="12">
                        <p style="text-align: left;">El promedio ponderado se calcula :</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-row>
                            <b-col sm="4" md="4" lg="4" class="mb-3">
                                <span class="description">P.P. = </span>
                            </b-col>
                            <b-col sm="8" md="8" lg="8">
                                <b-row>
                                    <b-col cols="12">
                                        <b-row>
                                            <b-col>
                                                <span class="">a</span><em><sub>1</sub></em>
                                                <em><sub> x </sub></em>
                                                <span class="">p</span><em><sub>1</sub></em>
                                                <span> + </span>
                                                <span class="">a</span><em><sub>2</sub></em>
                                                <em><sub> x </sub></em>
                                                <span class="">p</span><em><sub>2</sub></em>
                                                <span> + ... + </span>
                                                <span class="">a</span><em><sub>n-1</sub></em>
                                                <em><sub> x </sub></em>
                                                <span class="">p</span><em><sub>n-1</sub></em>
                                                <span> + </span>
                                                <span class="">a</span><em><sub>n</sub></em>
                                                <em><sub> x </sub></em>
                                                <span class="">p</span><em><sub>n</sub></em>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span>————————————————————</span>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="">p</span><em><sub>1</sub></em>
                                                <span class=""> + p </span><em><sub>2</sub></em>
                                                <span class=""> + ... </span>
                                                <span class=""> + p </span><em><sub>n-1</sub></em>
                                                <span class=""> + p </span><em><sub>n</sub></em>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" class="mt-5">
                        <p style="text-align: left;">Ejemplo , tenemos la siguiente lista de números y pesos</p>
                    </b-col>
                    <b-col cols="12">
                        <b-row>
                            <b-col cols="5" style="border: 1px solid;">
                                Número
                            </b-col>
                            <b-col cols="5" style="border: 1px solid;">
                                Peso
                            </b-col>
                            <b-col cols="2" style="border: 1px solid;">
                            </b-col>
                        </b-row>
                        <b-row v-for="(object, index) in numbers" :key="index">
                            <b-col cols="5" style="border: 1px solid;">
                                <b-row>
                                    <b-col cols="12">
                                        <span>{{object.number}}</span>
                                    </b-col>
                                    
                                    <b-col cols="12">
                                        <vue-slider v-model="object.number" :min="1"/>
                                    </b-col>
                                </b-row>
                                
                            </b-col>
                            <b-col cols="5" style="border: 1px solid;">
                                <b-row>
                                    <b-col cols="12">
                                        <span>{{object.weight}}</span>
                                    </b-col>                                
                                    <b-col cols="12">
                                        <vue-slider v-model="object.weight" :min="1"/>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col cols="2" style="border: 1px solid;">
                                <b-icon icon="plus-circle" class="removeNumber right" style="margin: 0px 5px " @click="addNumber" />
                                <b-icon v-if="numbers.length>2" icon="trash" class="removeNumber" style="margin: 0px 5px ;" @click="removeNumber(index)"/>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" class="mt-4">
                        <b-row>
                            <b-col style="text-align: left;">
                                <p>El Promedio Ponderado de estos números se calcula de la siguiente manera :</p>
                                <p>Primero multiplicamos  : los números por sus pesos y los sumamos</p>
                                <p>=> 
                                    <span v-for="(object, index) in numbers" :key="index">  
                                         {{object.number}} x {{object.weight}} 
                                         <span v-if="index<numbers.length-1"> + </span>
                                    </span>
                                </p>
                                <p>=> 
                                    <span v-for="(object, index) in numbers" :key="index">  
                                         {{object.number * object.weight}} 
                                         <span v-if="index<numbers.length-1"> + </span>
                                    </span>
                                    <span> = {{productValue}}</span>
                                </p>
                                <p>Luego sumamos los valores de los pesos</p>
                                <p>=> 
                                    <span v-for="(object, index) in numbers" :key="index">  
                                         {{object.weight}} 
                                         <span v-if="index<numbers.length-1"> + </span>
                                    </span>
                                    <span> =  {{weightSum}}</span>
                                </p>
                                <p>Finalmente dividimos ambos resultados {{productValue}} /  {{weightSum}}</p>
                                <p style="text-align: left;">=> la P.P. <span> {{isInexact?"≈":"="}} </span>  {{ getWeightAverage().toFixed(4)}}</p> 
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import { mathHelper } from '@/helpers';
    export default {
        name: 'WeightedAverageComponent',
        data() {
            return {
                numbers: [
                    { number: 4, weight: 10 },
                    { number: 8, weight: 20 },
                    { number: 12, weight: 30 },
                    { number: 20, weight: 40 }
                ],
                isInexact: false
            }
        },
        methods: {
            addNumber() {
                let newNumber = { number: mathHelper.getRandomNumber(), weight:mathHelper.getRandomNumber()};
                this.numbers.push(newNumber);
            },
            removeNumber(index) {
                this.numbers.splice(index, 1);
            },
            getWeightAverage(){
                let productValue = this.productValue;
                let weightSum = this.weightSum;
                let average = productValue / weightSum;
                let decimals = this.countDecimals(average);
                this.isInexact = decimals > 3;
                return average;
            },
            countDecimals(number) {
                if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
                return number.toString().split(".")[1].length || 0;
            }
        },
        computed: {
            productValue() {
                let value = 0;
                this.numbers.forEach(element => {
                    value += (element.number * element.weight); 
                });
                return value;
            } ,
            weightSum() {
                let value = 0;
                this.numbers.forEach(element => {
                    value += (element.weight); 
                });
                return value;
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
</style>