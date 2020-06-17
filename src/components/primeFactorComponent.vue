<template>
    <div class="mt-2">
        <div class="mt-2">Factores Primos : </div>
        <div v-for="(factor,index) in primeFactors" :key="index" class="factor mt-2">
            <span>{{factor.base}}<sup>{{factor.exponential}}</sup></span>
            <span v-if="index!=primeFactors.length-1">x</span>
        </div>
    </div>
</template>
<script>
    import { mathHelper } from '../helpers';
    export default {
        name: 'PrimeFactor',
        data() {
            return {
                primeFactors: []
            }
        },
        props: {
            number: {
                required: true
            },
        },
        created() {
            this.decomposePrimeFactor();
        },
        methods: {
            decomposePrimeFactor() {
                this.primeFactors = [];
                let newFactors = mathHelper.decomposePrimeFactor(this.number);
                let primeFactors = newFactors.split(' ');
                primeFactors.forEach(factor => {
                    let number = factor.split('*');
                    this.primeFactors.push({ base: number[0], exponential: number[1] });
                });
            },
            // getFactors(primeFactor) {
            //     return primeFactor.split('*');
            // }
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
<style lang="scss">
    .factor {
        span {
            margin: 0 10px;
        }

        display: inline-block;
    }
</style>