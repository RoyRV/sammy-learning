<template>
    <div>
        <b-row>
            <b-col cols="12">
                <h2>Productos Notables</h2>
            </b-col>
            <b-col>
                <CuadraticSum></CuadraticSum>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import CuadraticSum from '@/components/algebra/notableProducts/cuadraticSum.vue'
    export default {
        name: 'NotableProducts',
        components: { CuadraticSum }
    }
</script>
<style>
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