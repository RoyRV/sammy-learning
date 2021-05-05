<template>
    <div>
        <b-row>
            <b-col cols="12">
                <h2>Productos Notables</h2>
            </b-col>
            <b-col>
                <div role="tablist">
                    <Introduction></Introduction>
                    <SumaMultiplicacion></SumaMultiplicacion>
                    <CuadraticSum></CuadraticSum>
                    <CuadraticSubstraction></CuadraticSubstraction>
                    <CubicSum></CubicSum>
                    <CubicSubstraction></CubicSubstraction>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import Introduction from '@/components/algebra/notableProducts/introduction.vue'
    import SumaMultiplicacion from '@/components/algebra/notableProducts/sumaMultiplicacion.vue'
    import CuadraticSum from '@/components/algebra/notableProducts/cuadraticSum.vue'
    import CuadraticSubstraction from '@/components/algebra/notableProducts/cuadraticSubstraction.vue'
    import CubicSum from '@/components/algebra/notableProducts/cubicSum.vue'
    import CubicSubstraction from '@/components/algebra/notableProducts/cubicSubstraction.vue'
    export default {
        name: 'NotableProducts',
        components: { Introduction, SumaMultiplicacion, CuadraticSum, CuadraticSubstraction , CubicSum ,CubicSubstraction }
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