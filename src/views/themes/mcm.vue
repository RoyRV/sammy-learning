<template>
    <div>
        <b-row>
            <b-col>
                <h2>Mínimo común múltiplo</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" md="6">
                <b-row>
                    <b-col>
                        <vue-slider v-model="numbers[0]" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span> {{numbers[0]}} </span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <PrimeFactor />
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
                        <span> {{numbers[1]}} </span>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import PrimeFactor from '../../components/primeFactorComponent.vue';
    // import { mathHelper } from '../../helpers';
    export default {
        components: { PrimeFactor },
        name: 'MCM',
        data() {
            return {
                numbers: [2, 4]
            }
        },
        // created() {
        //     let factor = mathHelper.decomposePrimeFactor(4984);
        //     console.log(factor)
        // },
    }
</script>