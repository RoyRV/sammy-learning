<template lang="">
    <div>
        <b-row>
            <b-col>
                <h2>Comparar fracciones</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">Fracciones Homogeneas</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="4">
                                            <b-row>
                                                <b-col>
                                                    <span>Primer Numerador : {{homogenean.numeratorOne}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="homogenean.numeratorOne" :max="10" :min="1" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="4">
                                            <b-row>
                                                <b-col>
                                                    <span>Segundo Numerador : {{homogenean.numeratorTwo}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="homogenean.numeratorTwo" :max="10" :min="1" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="4">
                                            <b-row>
                                                <b-col>
                                                    <span>Denominador Común : {{homogenean.denominator}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="homogenean.denominator" :max="10" :min="2" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row>
                                        <b-col cols="4">
                                            <FractionComponent :numerator="homogenean.numeratorOne"
                                                :denominator="homogenean.denominator">
                                            </FractionComponent>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <img v-if="homogenean.numeratorOne>homogenean.numeratorTwo"
                                                    :src="'/assets/greater.svg'"
                                                    style="max-width: 50px;min-width: 30px;" />
                                                <img v-if="homogenean.numeratorOne==homogenean.numeratorTwo"
                                                    :src="'/assets/equal.svg'"
                                                    style="max-width: 50px;min-width: 30px;" />
                                                <img v-if="homogenean.numeratorOne<homogenean.numeratorTwo"
                                                    :src="'/assets/less.svg'"
                                                    style="max-width: 50px;min-width: 30px;" />
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <FractionComponent :numerator="homogenean.numeratorTwo"
                                                :denominator="homogenean.denominator">
                                            </FractionComponent>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">Fracciones Heterogeneas</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <span>Primer Numerador : {{heterogenean.numeratorOne}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="heterogenean.numeratorOne" :max="10"
                                                        :min="1" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <span>Primer Denominador : {{heterogenean.denominatorOne}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="heterogenean.denominatorOne" :max="10"
                                                        :min="2" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <span>Segundo Numerador : {{heterogenean.numeratorTwo}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="heterogenean.numeratorTwo" :max="10"
                                                        :min="1" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <span>Segundo Denominador : {{heterogenean.denominatorTwo}}</span>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="heterogenean.denominatorTwo" :max="10"
                                                        :min="2" />
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row>
                                        <b-col cols="4">
                                            <FractionComponent :numerator="heterogenean.numeratorOne"
                                                :denominator="heterogenean.denominatorOne">
                                            </FractionComponent>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <img v-if="(heterogenean.numeratorOne * heterogenean.denominatorTwo)>(heterogenean.numeratorTwo * heterogenean.denominatorOne)"
                                                    :src="'/assets/greater.svg'"
                                                    style="max-width: 50px;min-width: 30px;" />
                                                <img v-if="(heterogenean.numeratorOne * heterogenean.denominatorTwo)==(heterogenean.numeratorTwo * heterogenean.denominatorOne)"
                                                    :src="'/assets/equal.svg'"
                                                    style="max-width: 50px;min-width: 30px;" />
                                                <img v-if="(heterogenean.numeratorOne * heterogenean.denominatorTwo)<(heterogenean.numeratorTwo * heterogenean.denominatorOne)"
                                                    :src="'/assets/less.svg'"
                                                    style="max-width: 50px;min-width: 30px;" />
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <FractionComponent :numerator="heterogenean.numeratorTwo"
                                                :denominator="heterogenean.denominatorTwo">
                                            </FractionComponent>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row>
                                        <b-col>
                                            <p style="text-align: left;">Para comparar fracciones , debemos utilizar una
                                                aspa simple :</p>
                                            <p style="text-align: justify;"><span>En este caso multiplicamos el primer
                                                    numerador por el segundo
                                                    denominador</span>
                                                <span> y este caso multiplicamos el segundo numerador por el primer
                                                    denominador</span>
                                            </p>
                                            <p>
                                                Comparar {{heterogenean.numeratorOne}} x {{heterogenean.denominatorTwo}}
                                                y {{heterogenean.numeratorTwo}} x {{heterogenean.denominatorOne}}
                                            </p>
                                            <p>
                                                Comparar {{heterogenean.numeratorOne * heterogenean.denominatorTwo}}
                                                y {{heterogenean.numeratorTwo * heterogenean.denominatorOne}}
                                            </p>
                                        </b-col>
                                    </b-row>
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
    import FractionComponent from '@/components/fractionComponent.vue';
    export default {
        name: 'compareFractions',
        components: { FractionComponent, },
        data() {
            return {
                homogenean: {
                    numeratorOne: 1,
                    numeratorTwo: 2,
                    denominator: 8
                },
                heterogenean: {
                    numeratorOne: 1,
                    numeratorTwo: 2,
                    denominatorOne: 5,
                    denominatorTwo: 8,
                }
            }
        },
    }
</script>