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
                        <vue-slider v-model="numbers[0]" />
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
                        <vue-slider v-model="numbers[1]" />
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

            </b-col>
        </b-row>
    </div>
</template>
<script>
    import PrimeFactorComponent from '../../components/primeFactorComponent.vue';
    export default {
        components: { PrimeFactorComponent },
        name: 'MCM',
        data() {
            return {
                numbers: [2, 4]
            }
        },
    }
</script>