<template>
    <b-row>
        <!-- <b-col cols="12">
            {{quotients}} {{divisors}}
        </b-col>
        -->
        <b-col cols="12" v-if="primeFactors.length>1">
            <div v-for="(factor,index) in quotients" :key="index">
                <span>/ {{divisors[index]}} =  {{factor}}</span>
            </div>
        </b-col>
        <b-col cols="12" v-else>
            <span>El número {{ number }} solo es divisible por si mismo, es un número primo</span>
        </b-col>
    </b-row>
</template>
<script>
    import { mathHelper } from '../helpers';
    export default {
        name: 'SuccessiveDivisions',
        props: {
            number: {
                required: true
            },
        },
        data() {
            return {
                primeFactors: [],
                quotients: [],
                divisors : []
            }
        },
        created() {
            this.decomposePrimeFactor();
        },
        methods: {
            decomposePrimeFactor() {
                this.primeFactors = [];
                this.quotients = [];
                this.divisors = [];
                let newFactors = mathHelper.decomposePrimeFactor(this.number);
                let primeFactors = newFactors.split(' ');
                primeFactors.forEach(factor => {
                    let number = factor.split('*');
                    this.primeFactors.push({ base: number[0], exponential: number[1] });
                });
                //aqui dividimos
                let number = this.number;
                for (let index = 0; index < this.primeFactors.length; index++) {
                    let primeFactor = this.primeFactors[index];
                    for (let expoIndex = 0; expoIndex < primeFactor.exponential; expoIndex++) {
                        console.log('number antes', number)
                        this.divisors.push(primeFactor.base);
                        number = number/primeFactor.base;
                        console.log('number despues', number)
                        this.quotients.push(number);
                    }
                }
            },
        },
        watch: {
            number: {
                immediate: false,
                deep: true,
                handler() {
                    this.decomposePrimeFactor();
                }
            }
        },
    }
</script>