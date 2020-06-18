<template>
    <div>
        <b-row>
            <b-col>
                <h2>Máximo Común Divisor</h2>
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
                        <span>Resultado: {{mcdResult}} </span>
                        <b-icon v-if="mcdResult===1" id="mcdResult" icon="exclamation-circle-fill" variant="danger"
                            font-scale="1" />
                        <b-tooltip v-if="mcdResult===1" target="mcdResult"
                            title="No existen factores comunes entre ambos números" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col v-if="mcdResult>1">
                        <PrimeFactorComponent :number="mcdResult" desc="Factores comunes" />
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
        name: 'MCD',
        components: { PrimeFactorComponent },
        data() {
            return {
                numbers: [24, 36]
            }
        },
        computed: {
            mcdResult() {
                return mathHelper.getMcd(this.numbers);
            }
        },
    }
</script>
<style scoped>
    #mcdResult {
        margin-left: 10px;
    }
</style>