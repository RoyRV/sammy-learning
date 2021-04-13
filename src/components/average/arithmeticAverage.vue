<template>
    <div>
        <b-row>
            <b-col cols="12">
                <p style="text-align: left;">El promedio aritmético se obtiene al dividir la suma de datos entre el
                    número de datos. </p>
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
                        <p style="text-align: left;">La media aritmetica se calcula :</p>
                    </b-col>
                    <b-col cols="12">
                        <b-row>
                            <b-col sm="4" md="2" lg="2" class="mb-3">
                                <span class="description">M.A. = </span>
                            </b-col>
                            <b-col sm="8" md="4" lg="4">
                                <b-row>
                                    <b-col>
                                        <span>Sumatoria de los números</span>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <span>——————————</span>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <span>cantidad de datos</span>
                                    </b-col>
                                </b-row>
                            </b-col>

                            <b-col sm="4" md="2" lg="1">
                                <span class="description">= </span>
                            </b-col>
                            <b-col sm="8" md="4" lg="5">
                                <b-row>
                                    <b-col>
                                        <span class="">a</span><em><sub>1</sub></em>
                                        <span class=""> + a </span><em><sub>2</sub></em>
                                        <span class=""> +.. </span>
                                        <span class=""> + a </span><em><sub>n-1</sub></em>
                                        <span class=""> + a </span><em><sub>n</sub></em>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <span>————————————</span>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <span>n</span>
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
                <draggable v-model="numbers">
                    <div v-for="(value, index) in numbers" :key="index" class="draggableNumber">
                        <b-row>
                            <b-col>
                                <b-icon :id="'numbers' + index" icon="arrows-move" class="moveNumber"></b-icon>
                                <span>{{numbers[index]}}</span>

                                <b-icon icon="plus-circle" class="removeNumber right ml-2" @click="addNumber">
                                </b-icon>
                                <b-icon v-if="numbers.length>1" icon="trash" class="removeNumber"
                                    @click="removeNumber(index)"></b-icon>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <vue-slider v-model="numbers[index]" />
                            </b-col>
                        </b-row>
                        <b-tooltip v-if="numbers.length>1" :target="'numbers' + index"
                            title="Puedes cambiar el orden, solo arrastrame arriba o abajo" />
                    </div>
                </draggable>
            </b-col>
            <b-col cols="12">
                <p style="text-align: left;">Solución :</p>
                <p style="text-align: left;">Tendriamos los números {{numbers.join(',')}}, la sumatoria es : {{sumValue}}</p>
                <p style="text-align: left;">Tendriamos la cantidad de números {{numbers.length}}</p>
                <p style="text-align: left;">Tendriamos que dividir : {{sumValue}} / {{numbers.length}}</p>
                <p style="text-align: left;">=> la M.A. <span> {{isInexact?"≈":"="}} </span>  {{ getArithmeticAverage().toFixed(2)}}</p>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import draggable from 'vuedraggable'
    import { mathHelper } from '@/helpers';
    export default {
        name: 'ArithmeticAveragenComponent',
        components: { draggable },
        data() {
            return {
                numbers: [6, 3, 45],
                isInexact : false
            }
        },
        computed : {
            sumValue(){
                let sum = 0;
                this.numbers.forEach(element => {
                    sum+=element;
                });
                return sum;
            }
        },
        methods: {
            addNumber() {
                this.numbers.push(mathHelper.getRandomNumber());
            },
            removeNumber(index) {
                this.numbers.splice(index, 1);
            },
            getArithmeticAverage () {
               let sum =  this.sumValue;
               let average = sum/this.numbers.length;
               let decimals = this.countDecimals(average);
               this.isInexact= decimals > 2;
               return average;
            },
            countDecimals(number) {
                if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
                return number.toString().split(".")[1].length || 0;
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
</style>