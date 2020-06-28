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
                                    <!--TODO : generar el arbol de divisiones con los residuos-->
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
                                    <b-row cols="12" class="mt-5">
                                        <b-col>
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
                                                    <!--TODO : mostrar una alerta cuando escriba un numero superior a la base-->
                                                    <!-- ejemplo : si está en base 3 no deberia poder poner el # 4-->
                                                    <span>En base : {{notDecimalRadix}} </span>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row cols="12" class="mt-5">
                                        <b-col>
                                            <span>En sistema decimal: {{inDecimalResult}} </span>
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
    export default {
        name: 'NumericSystem',
        components: { InputNumberComponent },
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
            inDecimalResult() {
                let errorMessage = `No podemos convertir este número a la base ${this.notDecimalRadix}`;
                if (!mathHelper.canConvertBase(this.notDecimalNumber, this.notDecimalRadix)) {
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