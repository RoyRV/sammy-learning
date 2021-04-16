<template>
      <!--Potencia de producto-->
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" role="tab">
            <b-button block v-b-toggle.accordion-4 variant="info">Potencia de un Producto
            </b-button>
        </b-card-header>
        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>
                    <b-row>
                        <b-col cols="12" md="4" class="mb-2">
                            <b-row>
                                <b-col>
                                    <p>Cuando tienen un producto y un exponente los afecta</p>
                                    <span> ( </span>
                                    <span class="description">a</span>
                                    <span class="">x</span>
                                    <span class="description">b</span>
                                    <span> ) </span>
                                    <sup class="expo">m</sup>
                                    <span> = </span>
                                    <span class="description">a</span>
                                    <sup class="expo">m</sup>
                                    <span class="">x</span>
                                    <span class="description">b</span>
                                    <sup class="expo">m</sup>
                                </b-col>
                            </b-row>

                        </b-col>
                        <b-col cols="12" md="8" class="mt-2">
                            <b-row>
                                <b-col>
                                    <p style="text-align: left;">Ejemplo</p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" md="6">
                                    <b-row>
                                        <b-col>
                                            <vue-slider v-model="comunBaseMultiFactor1" :max="50" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-4">
                                        <b-col>
                                            <span>Factor a : {{comunBaseMultiFactor1}}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col cols="12" md="6">
                                    <b-row>
                                        <b-col>
                                            <vue-slider v-model="comunBaseMultiFactor2" :max="50" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-4">
                                        <b-col>
                                            <span>Factor b : {{comunBaseMultiFactor2}}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12">
                                    <b-row>
                                        <b-col>
                                            <vue-slider v-model="comunBaseMultiExpo" :max="10" />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-4">
                                        <b-col>
                                            <span>Exponente : {{comunBaseMultiExpo}}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <span>
                                        <span> ( </span>
                                        <span class="description">{{comunBaseMultiFactor1}}</span>
                                        <span class="">x</span>
                                        <span class="description">{{comunBaseMultiFactor2}}</span>
                                        <span> ) </span>
                                        <sup class="expo">{{comunBaseMultiExpo}}</sup>

                                    </span>
                                    <span> = </span>
                                    <span>
                                        <span class="description">{{comunBaseMultiFactor1}}</span>
                                        <sup class="expo">{{comunBaseMultiExpo}}</sup>
                                        <span class="">x</span>

                                        <span class="description">{{comunBaseMultiFactor2}}</span>
                                        <sup class="expo">{{comunBaseMultiExpo}}</sup>
                                    </span>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>
<script>
    export default {
        name:  'potenciaDeProducto',
        data() {
            return {
                comunBaseMultiExpo: 5,
                comunBaseMultiFactor1: 2,
                comunBaseMultiFactor2: 3,
            }
        },
        computed: {
            
        },
    }
</script>