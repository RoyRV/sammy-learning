<template>
    <div>
        <b-row>
            <b-col>
                <h2>Teoría de Exponentes</h2>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col>
                <div role="tablist">
                    <SumaExponentes></SumaExponentes>
                    <RestaExponentes></RestaExponentes>
                    <PotenciaDePotenciaExponentes></PotenciaDePotenciaExponentes>
                    <PotenciaDeProductoExponentes></PotenciaDeProductoExponentes>
                    <PotenciaDeDivisionExponentes></PotenciaDeDivisionExponentes>
                    <PotenciaFraccionExponentes></PotenciaFraccionExponentes>
                    <PotenciaDeCeroExponentes></PotenciaDeCeroExponentes>
                    <PotenciaNegativaExponentes></PotenciaNegativaExponentes>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import SumaExponentes from '@/components/algebra/exponentPower/sum.vue'
    import RestaExponentes from '@/components/algebra/exponentPower/substraction.vue'
    import PotenciaDePotenciaExponentes from '@/components/algebra/exponentPower/potenciaDePotencia.vue'
    import PotenciaDeProductoExponentes from '@/components/algebra/exponentPower/potenciaDeProducto.vue'
    import PotenciaDeDivisionExponentes from '@/components/algebra/exponentPower/potenciaDeDivision.vue'
    import PotenciaFraccionExponentes from '@/components/algebra/exponentPower/potenciaFraccion.vue'
    import PotenciaDeCeroExponentes from '@/components/algebra/exponentPower/potenciaDeCero.vue'
    import PotenciaNegativaExponentes from '@/components/algebra/exponentPower/potenciaNegativa.vue'
    export default {
        name: 'ExponentPower',
        components: { SumaExponentes, RestaExponentes, PotenciaDePotenciaExponentes, PotenciaDeProductoExponentes, 
                        PotenciaDeDivisionExponentes, PotenciaFraccionExponentes, PotenciaDeCeroExponentes, PotenciaNegativaExponentes },
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

    .expo {
        top: -1.0em;
    }

    .square {
        top: -2.0em;
        right: -1em;
    }
</style>