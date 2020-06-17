<template>
    <div>
        <b-row v-for="(factors,index) in primeFactors" :key="index" class="primeFactorRow">
            <b-col class="factor">122</b-col>
            <b-col class="factor">|</b-col>
            <b-col class="factor">1</b-col>
        </b-row>
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
                // type: String,
                required: true
            },
        },
        methods: {
            decomposePrimeFactor() {
                return mathHelper.decomposePrimeFactor(this.number);
            }

        },
        watch: {
            number: {
                immediate: false,
                deep: true,
                handler(newValue) {
                    let newFactors = this.decomposePrimeFactor(newValue);
                    this.primeFactors = newFactors.split(' ');
                }
            }
        },
    }
</script>
<style lang="scss">
    .factor {
        &:first-child {
            text-align: right;
        }

        &:last-child {
            text-align: left;
        }
    }
</style>