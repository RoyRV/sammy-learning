<template>
    <div>
        <b-row>
            <b-col>
                <h2>Factor Primo</h2>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col>
                <span>Al hablar de factores primos, hablamos de descomponer un número,
                    en<strong> números primos</strong> de manera que ya no sean divisibles más que por si mismos

                </span>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col cols="12">
                <p style="text-align: left;">Ejemplo : </p>
            </b-col>
            <b-col cols="12">
                <vue-slider v-model="number" :min="2" :max="300" />
            </b-col>
            <b-col cols="12">
                <span> Número: {{number}} </span>
            </b-col>
            <b-col cols="12">
                <PrimeFactorComponent :number="number" />
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import PrimeFactorComponent from '@/components/primeFactorComponent.vue';
    export default {
        class: 'PrimeFactor',
        components: { PrimeFactorComponent },
        data() {
            return {
                number: 20
            }
        },
    }
</script>