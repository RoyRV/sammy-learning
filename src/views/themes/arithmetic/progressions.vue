<template lang="">
    <div>
        <b-row><b-col><h2>Progresiones</h2></b-col></b-row>
        <b-row>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">P. Aritmetica</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    
                                    <ArithmeticProgressionComponent></ArithmeticProgressionComponent>
                                    
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import ArithmeticProgressionComponent from '@/components/progresion/arithmeticProgression.vue'
    export default {
        name: 'Progressions',
        components : {ArithmeticProgressionComponent},
        data() {
            return {
               
            }
        },
    }
</script>
