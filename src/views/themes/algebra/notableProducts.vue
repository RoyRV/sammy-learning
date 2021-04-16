<template>
    <div>
        <b-row>
            <b-col cols="12">
                <h2>Productos Notables</h2>
            </b-col>
            <b-col>
                <div role="tablist">
                    <Introduction></Introduction>
                    <CuadraticSum></CuadraticSum>
                    <CuadraticSubstraction></CuadraticSubstraction>
                    <CubiccSum></CubiccSum>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import Introduction from '@/components/algebra/notableProducts/introduction.vue'
    import CuadraticSum from '@/components/algebra/notableProducts/cuadraticSum.vue'
    import CuadraticSubstraction from '@/components/algebra/notableProducts/cuadraticSubstraction.vue'
    import CubiccSum from '@/components/algebra/notableProducts/cubicSum.vue'
    export default {
        name: 'NotableProducts',
        components: { Introduction, CuadraticSum, CuadraticSubstraction , CubiccSum }
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

    @media (max-width:760px) {
        .description {
            font-size: 25px;
        }
    }
</style>