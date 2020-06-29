<template>
    <div>
        <b-row>
            <b-col>
                <h2>Sistemas númericos</h2>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col>
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-1 variant="info">De base 10 a base n</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <b-row>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="decimalNumber" />
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>Convertir : {{decimalNumber}} </span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="decimalRadix" :min="2" :max="9" />
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>A la base : {{decimalRadix}} </span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="12" md="6" class="mt-4">
                                            <ContinueDivisionComponent :number="decimalNumber" :base="decimalRadix">
                                            </ContinueDivisionComponent>
                                        </b-col>
                                        <b-col cols="12" md="6" class="mt-4">
                                            <span>Resultado: {{result}} </span>
                                        </b-col>
                                    </b-row>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block v-b-toggle.accordion-2 variant="info">De base n a base 10
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>
                                    <!--TODO : generar el arbol de exponentes para convertir al sistema decimal-->
                                    <b-row>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <InputNumberComponent v-model="notDecimalNumber" inline controls
                                                        :min="0" :center="true">
                                                    </InputNumberComponent>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>Convertir : {{notDecimalNumber}} </span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="12" md="6">
                                            <b-row>
                                                <b-col>
                                                    <vue-slider v-model="notDecimalRadix" :min="2" :max="9" />
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col>
                                                    <span>De base : {{notDecimalRadix}} a base 10</span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row v-if="canConvertToDecimal">
                                        <b-col cols="12" md="6" class="mt-4">
                                            <ContinueExponentComponent :number="notDecimalNumber"
                                                :base="notDecimalRadix">
                                            </ContinueExponentComponent>
                                        </b-col>
                                        <b-col cols="12" md="6" class="mt-4">
                                            <span>Resultado (en base 10): {{inDecimalResult}} </span>
                                        </b-col>
                                    </b-row>
                                    <b-row v-else class="mt-4">
                                        <b-col>
                                            <span>No podemos convertir {{notDecimalNumber}} desde la base
                                                {{notDecimalRadix}}
                                                a base 10</span>
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
    import { mathHelper } from '@/helpers';
    import InputNumberComponent from '@/components/inputNumberComponent.vue'
    import ContinueDivisionComponent from '@/components/continueDivisionComponent.vue'
    import ContinueExponentComponent from '@/components/continueExponentComponent.vue'
    export default {
        name: 'NumericSystem',
        components: { InputNumberComponent, ContinueDivisionComponent, ContinueExponentComponent },
        data() {
            return {
                decimalNumber: 10,
                decimalRadix: 2,
                notDecimalNumber: 10,
                notDecimalRadix: 2
            }
        },
        computed: {
            result() {
                return this.decimalNumber.toString(this.decimalRadix);
            },
            canConvertToDecimal() {
                return mathHelper.canConvertBase(this.notDecimalNumber, this.notDecimalRadix);
            },
            inDecimalResult() {
                let errorMessage = `No podemos convertir este número a la base ${this.notDecimalRadix}`;
                if (!this.canConvertToDecimal) {
                    return errorMessage;
                }

                let newNumber = mathHelper.convertNumberToBase(this.notDecimalNumber, this.notDecimalRadix, 10);
                if (isNaN(newNumber)) {
                    return errorMessage;
                }
                return newNumber;
            }
        },
        methods: {
            isNumber: function (evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            }
        },
    }
</script>