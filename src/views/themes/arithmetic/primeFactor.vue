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
            <b-col>
                <p style="text-align: left;">Ejemplo : </p>
            </b-col>
        </b-row>
        <b-row class="mt-1">
            <b-col>
                <vue-slider v-model="number" :min="2" :max="300" />
            </b-col>
        </b-row>
        <b-row class="mt-1">
            <b-col>
                <span> Número: {{number}} </span>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
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