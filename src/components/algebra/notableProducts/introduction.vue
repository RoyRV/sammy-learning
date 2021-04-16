<template>
    <b-card no-body class="mb-1">
        <b-card-header header-tag="header" role="tab">
            <b-button block v-b-toggle.accordion-0 variant="info">Introducción</b-button>
        </b-card-header>
        <b-collapse id="accordion-0" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>
                    <b-row>
                        <b-col cols="12" style="text-align: left;">
                            <p>Sabemos que se llama producto al resultado de una multiplicación. También
                                sabemos que los valores que se multiplican se llaman factores .</p>
                            <p>Se llama productos notables a ciertas expresiones algebraicas que se
                                encuentran frecuentemente y que es preciso saber factorizarlas a simple
                                vista; es decir, sin necesidad de hacerlo paso por paso.</p>
                            <p>Se les llama productos notables (también productos especiales )
                                precisamente porque son muy utilizados en los ejercicios.</p>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>
<script>
    export default {
        name : 'Introduction'
    }
</script>