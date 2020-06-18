<template>
    <div>
        <b-row>
            <b-col>
                <h2>Mínimo común múltiplo</h2>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col cols="12" md="6">
                <b-row>
                    <b-col>
                        <vue-slider v-model="numbers[0]" :min="2" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span>Primer Número: {{numbers[0]}} </span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <PrimeFactorComponent :number="numbers[0]" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" md="6">
                <b-row>
                    <b-col>
                        <vue-slider v-model="numbers[1]" :min="2" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span>Segundo Número: {{numbers[1]}} </span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <PrimeFactorComponent :number="numbers[1]" />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row cols="12" class="mt-5">
            <b-col>
                <b-row>
                    <b-col>
                        <span>Resultado: {{mcmResult}} </span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <PrimeFactorComponent :number="mcmResult" />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import PrimeFactorComponent from '@/components/primeFactorComponent.vue';
    import { mathHelper } from '@/helpers';
    export default {
        components: { PrimeFactorComponent },
        name: 'MCM',
        data() {
            return {
                numbers: [24, 36]
            }
        },
        computed: {
            mcmResult() {
                return mathHelper.getMcm(this.numbers);
            }
        },
    }
</script>