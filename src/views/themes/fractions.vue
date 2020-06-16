<template>
    <div>
        <b-row>
            <b-col>
                <h2>Fracciones</h2>
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
                                        <b-col cols="6" md="4">
                                            <FractionComponent :numerator="homogenean.numeratorOne"
                                                :denominator="homogenean.denominator"></FractionComponent>
                                        </b-col>
                                        <b-col cols="6" md="2">
                                            <div>
                                                <img :src="'/assets/plus.svg'" style="max-width: 60px;" />
                                            </div>
                                        </b-col>
                                        <b-col cols="6" md="4">
                                            <FractionComponent :numerator="homogenean.numeratorTwo"
                                                :denominator="homogenean.denominator"></FractionComponent>
                                        </b-col>
                                        <b-col cols="6" md="2">
                                            <div>
                                                <img :src="'/assets/equal.svg'" style="max-width: 60px;" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <hr />
                                    <b-row>
                                        <b-col>
                                            <FractionComponent id="button-1"
                                                :numerator="(homogenean.numeratorOne + homogenean.numeratorTwo)"
                                                :denominator="homogenean.denominator"></FractionComponent>
                                            <b-tooltip target="button-1" :title="homogeneanOperation"></b-tooltip>
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
                                    b
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
    import FractionComponent from '../../components/fractionComponent.vue';
    export default {
        name: 'Fractions',
        components: { FractionComponent, },
        data() {
            return {
                homogenean: {
                    numeratorOne: 1,
                    numeratorTwo: 2,
                    denominator: 8
                }
            }
        },
        computed: {
            homogeneanOperation() {
                return `Hacemos una suma simple entre ${this.homogenean.numeratorOne} y ${this.homogenean.numeratorTwo}, mantenemos denominador igual`;
            }
        },
    }
</script>
<style scoped>
    hr {
        border-top-width: 10px;
    }
</style>