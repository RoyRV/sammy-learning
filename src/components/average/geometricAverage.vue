<template>
    <div>
        <b-row>
            <b-col cols="12">
                <p style="text-align: left;">El promedio geométrico o media geométrica se obtiene al extraer la raíz «n»
                    del producto de los «n» datos. </p>
            </b-col>
            <b-col cols="12">
                <p style="text-align: left;">Dados los números:</p>
                <p>
                    <span class="description">a</span><em><sub>1</sub></em>
                    <span class="description"> , a </span><em><sub>2</sub></em>
                    <span class="description"> , a </span><em><sub>3</sub></em>
                    <span class="description"> , a </span><em><sub>4</sub></em>
                    <span class="description"> ... </span>
                    <span class="description"> , a </span><em><sub>n-2</sub></em>
                    <span class="description"> , a </span><em><sub>n-1</sub></em>
                    <span class="description"> , a </span><em><sub>n</sub></em>
                </p>
            </b-col>
            <b-col cols="12">
                <b-row>
                    <b-col cols="12">
                        <p style="text-align: left;">La media geometrica se calcula :</p>
                    </b-col>
                    <b-col cols="12">
                        <b-row>
                            <b-col sm="4" md="4" lg="4" class="mb-3">
                                <span class="description">M.G. = </span>
                            </b-col>
                            <b-col sm="8" md="8" lg="8">
                                <b-row>
                                    <b-col>
                                        <sup>(cantidad de números)</sup><span>√</span>
                                        <span class="numberProduct">Producto de los números</span>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col sm="4" md="4" lg="4" class="mb-3">
                                <span class="description">M.G. = </span>
                            </b-col>
                            <b-col sm="8" md="8" lg="8">
                                <b-row>
                                    <b-col>
                                        <sup>n</sup><span>√</span>
                                        <span style="border-top: 1px black solid;padding-top: 4px;">
                                            <span class="description">a</span><em><sub>1</sub></em>
                                            <span class="description"> <em><sub> x </sub></em> a </span><em><sub>2</sub></em>
                                            <span class="description"> <em><sub> x </sub></em>.. </span>
                                            <span class="description"> <em><sub> x </sub></em> a </span><em><sub>n-1</sub></em>
                                            <span class="description"> <em><sub> x </sub></em> a </span><em><sub>n</sub></em>
                                        </span>
                                        
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" class="mt-4">
                <p style="text-align: left;">Ejemplo , tenemos la siguiente lista de números
                    {{numbers.join(',')}}</p>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    // import draggable from 'vuedraggable'
    // import { mathHelper } from '@/helpers';
    export default {
        name: 'GeometricAveragenComponent',
        // components: { draggable },
        data() {
            return {
                numbers: [6, 3, 45],
                isInexact : false
            }
        },
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

    .numberProduct {
        border-top: 1px solid;
        font-size: 20px;
    }

    @media (max-width:767px) {
        .numberProduct {
            font-size: 13px;
        }
    }
</style>