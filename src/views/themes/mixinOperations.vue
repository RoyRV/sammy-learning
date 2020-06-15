<template>
    <div>
        <b-row>
            <b-col>
                <h2>Operaciones Combinadas</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Ejemplo 1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <div class="notAvailableOperationContainer">
                                        <b-row>
                                            <b-col>
                                                <LowResolutionComponent :resolution="992" />
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <div class="operationContainer">
                                        <b-row class="operationRow">
                                            <b-col cols="3">
                                                <b-row>
                                                    <b-col>
                                                        <vue-slider v-model="exerciseOne.number1" :max="10" />
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col>
                                                        <span>{{exerciseOne.number1}}</span>
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                            <b-col>
                                                <div>
                                                    <img :src="'/assets/minus.svg'" class="iconSvg operationIcon" />
                                                </div>
                                            </b-col>
                                            <b-col>
                                                (
                                            </b-col>
                                            <b-col cols="3">
                                                <b-row>
                                                    <b-col>
                                                        <vue-slider v-model="exerciseOne.number2" :max="10" />
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col>
                                                        <span>{{exerciseOne.number2}}</span>
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                            <b-col>
                                                <div>
                                                    <img :src="'/assets/plus.svg'" class="iconSvg operationIcon" />
                                                </div>
                                            </b-col>
                                            <b-col cols="3">
                                                <b-row>
                                                    <b-col>
                                                        <vue-slider v-model="exerciseOne.number3" :max="10" />
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col>
                                                        <span>{{exerciseOne.number3}}</span>
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                            <b-col>
                                                )
                                            </b-col>
                                        </b-row>
                                        <b-row class="operationRow">
                                            <b-col cols="3">
                                                <span>{{exerciseOne.number1}}</span>
                                            </b-col>
                                            <b-col>
                                                <div>
                                                    <img :src="'/assets/minus.svg'" class="iconSvg operationIcon" />
                                                </div>
                                            </b-col>
                                            <b-col cols="8">
                                                (
                                                <span>{{exerciseOne.number2 + exerciseOne.number3}}</span>
                                                )
                                            </b-col>
                                        </b-row>
                                        <b-row class="operationRow">
                                            <b-col>
                                                <span>{{exerciseOne.number1 - (exerciseOne.number2 + exerciseOne.number3)}}</span>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Ejemplo 2</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <div class="notAvailableOperationContainer">
                                        <b-row>
                                            <b-col>
                                                <LowResolutionComponent :resolution="992" />
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <div class="operationContainer">
                                        <!--Primera expresion-->
                                        <b-row class="operationRow">
                                            <b-col cols="3">
                                                <b-row>
                                                    <b-col>
                                                        (
                                                    </b-col>
                                                    <b-col>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="exerciseOne.number1" :max="10" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>{{exerciseOne.number1}}</span>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                    <b-col>
                                                        <div>
                                                            <img :src="'/assets/plus.svg'" class="operationSvg" />
                                                        </div>
                                                    </b-col>
                                                    <b-col>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="exerciseOne.number2" :max="10" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>{{exerciseOne.number2}}</span>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                    <b-col>
                                                        )
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                            <b-col>
                                                <div>
                                                    <img :src="'/assets/minus.svg'" class="iconSvg operationIcon" />
                                                </div>
                                            </b-col>
                                            <b-col cols="3">
                                                <b-row>
                                                    <b-col>
                                                        (
                                                    </b-col>
                                                    <b-col>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="exerciseOne.number3" :max="10" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>{{exerciseOne.number3}}</span>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                    <b-col>
                                                        <div>
                                                            <img :src="'/assets/plus.svg'" class="operationSvg" />
                                                        </div>
                                                    </b-col>
                                                    <b-col>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="exerciseOne.number4" :max="10" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>{{exerciseOne.number4}}</span>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                    <b-col>
                                                        )
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                            <b-col>
                                                <div>
                                                    <img :src="'/assets/plus.svg'" class="iconSvg operationIcon" />
                                                </div>
                                            </b-col>
                                            <b-col cols="3">
                                                <b-row>
                                                    <b-col>
                                                        (
                                                    </b-col>
                                                    <b-col>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="exerciseOne.number5" :max="10" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>{{exerciseOne.number5}}</span>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                    <b-col>
                                                        <div>
                                                            <img :src="'/assets/multiplication.svg'"
                                                                class="operationSvg" />
                                                        </div>
                                                    </b-col>
                                                    <b-col>
                                                        <b-row>
                                                            <b-col>
                                                                <vue-slider v-model="exerciseOne.number6" :max="10" />
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <span>{{exerciseOne.number6}}</span>
                                                            </b-col>
                                                        </b-row>
                                                    </b-col>
                                                    <b-col>
                                                        )
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                        </b-row>
                                        <!--Segunda expresion-->
                                        <b-row class="operationRow">
                                            <b-col cols="3">
                                                <span>{{exerciseOne.number1+exerciseOne.number2}}</span>
                                            </b-col>
                                            <b-col>
                                                <div>
                                                    <img :src="'/assets/minus.svg'" class="iconSvg operationIcon" />
                                                </div>
                                            </b-col>
                                            <b-col cols="3">
                                                <span>{{exerciseOne.number3+exerciseOne.number4}}</span>
                                            </b-col>
                                            <b-col>
                                                <div>
                                                    <img :src="'/assets/plus.svg'" class="iconSvg operationIcon" />
                                                </div>
                                            </b-col>
                                            <b-col cols="3">
                                                <span>{{exerciseOne.number5*exerciseOne.number6}}</span>
                                            </b-col>
                                        </b-row>
                                        <!--Tercera expresion-->
                                        <b-row class="operationRow">
                                            <b-col cols="7">
                                                <span>{{exerciseOne.number1+exerciseOne.number2 - (exerciseOne.number3+exerciseOne.number4)}}</span>
                                            </b-col>
                                            <b-col>
                                                <div>
                                                    <img :src="'/assets/plus.svg'" class="iconSvg operationIcon" />
                                                </div>
                                            </b-col>
                                            <b-col cols="3">
                                                <span>{{exerciseOne.number5*exerciseOne.number6}}</span>
                                            </b-col>
                                        </b-row>
                                        <!--Cuarta expresion-->
                                        <b-row class="operationRow">
                                            <b-col>
                                                <span>{{exerciseOne.number1+exerciseOne.number2 - (exerciseOne.number3+exerciseOne.number4) +exerciseOne.number5*exerciseOne.number6}}</span>
                                            </b-col>
                                        </b-row>
                                    </div>

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
    import LowResolutionComponent from '../../components/lowResolutionComponent.vue';
    export default {
        name: 'MixinOperations',
        components: { LowResolutionComponent, },
        data() {
            return {
                exerciseOne: {
                    number1: 1,
                    number2: 2,
                    number3: 4,
                    number4: 3,
                    number5: 0,
                    number6: 6
                }
            }
        },
    }
</script>
<style scoped lang="scss">
    .notAvailableOperationContainer {
        display: none;
    }

    .operationContainer {
        display: block;

        .operationRow {
            border: solid 2px #17a2b8;
            border-bottom: none;

            &:last-child {
                border-bottom: solid 2px #17a2b8;
            }
        }

    }

    .iconSvg {
        max-height: 60px;
        width: 100%;
        max-width: 20px;
    }

    .operationIcon {
        max-width: none;
        width: 30px;
    }

    .operationSvg {
        max-width: 60px;
    }


    @media (max-width:1200px) {
        .iconSvg {
            max-width: 20px;
        }

        .operationIcon {
            max-width: none;
            width: 30px;
        }
    }

    @media (max-width:992px) {
        .sorryIcon {
            max-width: 200px;
        }

        .notAvailableOperationContainer {
            display: block;
        }

        .operationContainer {
            display: none;
        }
    }
</style>