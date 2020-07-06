<template>
    <div>
        <b-row>
            <b-col>
                <h2>Sumatorias</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <!-- Suma de numeros naturales-->
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" role="tab">
                        <b-button block v-b-toggle.accordion variant="info">Suma de los "n" primeros números
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>
                                <b-row>
                                    <b-col cols="12" md="4" class="mb-2">
                                        <b-row>
                                            <b-col>
                                                <p>Cuando tienen 'n' números consecutivos de una serie natural</p>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <p>Σ = 1+2+3+4+5+.....n</p>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="description">Σ = </span>
                                                <span class="formula">
                                                    <span class="description">n</span>
                                                    <span class=""> x </span>
                                                    <span class="description">(n+1)</span>
                                                </span>
                                                <b-row>
                                                    <b-col>
                                                        <span class="description" style="padding-left: 40px;">2</span>
                                                    </b-col>
                                                </b-row>
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
                                            <b-col cols="12">
                                                <b-row>
                                                    <b-col>
                                                        <vue-slider v-model="naturalNumber" :max="50" />
                                                    </b-col>
                                                </b-row>
                                                <b-row class="mb-4">
                                                    <b-col>
                                                        <span>Donde n es : {{naturalNumber}}</span>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="12">
                                                        <span class="">
                                                            [ ({{naturalNumber}}) * ({{naturalNumber}} + 1) ] / 2
                                                        </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="12">
                                                        <span> => </span>
                                                        <span class="">
                                                            [ ({{naturalNumber}}) * ({{naturalNumber + 1}}) ] / 2
                                                        </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="12">
                                                        <span> => </span>
                                                        <span class="description">
                                                            {{ [ naturalNumber * (naturalNumber + 1 ) ] / 2}}
                                                        </span>
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <!-- Suma de numeros pares-->
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" role="tab">
                        <b-button block v-b-toggle.accordionEven variant="info">Suma de los "n" primeros pares
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordionEven" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>
                                <b-row>
                                    <b-col cols="12" md="4" class="mb-2">
                                        <b-row>
                                            <b-col>
                                                <p>Cuando tienen 'n' números pares consecutivos de una serie natural</p>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <p>Σ = 2+4+6+8+10+.....(2n-2) + 2n</p>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="description">Σ = </span>
                                                <span class="">
                                                    <span class="description">n</span>
                                                    <span class=""> x </span>
                                                    <span class="description">(n+1)</span>
                                                </span>
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
                                            <b-col cols="12">
                                                <b-row>
                                                    <b-col>
                                                        <vue-slider v-model="evenNumber" :max="100" :data="evenData" />
                                                    </b-col>
                                                </b-row>
                                                <b-row class="mb-4">
                                                    <b-col>
                                                        <span>Donde n es : {{evenNumber}}</span>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="12">
                                                        <span class="">
                                                            ({{evenNumber}}) * ({{evenNumber}} + 1)
                                                        </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="12">
                                                        <span> => </span>
                                                        <span class="">
                                                            ({{evenNumber}}) * ({{evenNumber + 1}})
                                                        </span>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="12">
                                                        <span> => </span>
                                                        <span class="description">
                                                            {{ evenNumber * (evenNumber + 1 ) }}
                                                        </span>
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <!-- Suma de numeros impares-->
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" role="tab">
                        <b-button block v-b-toggle.accordionOdd variant="info">Suma de los "n" primeros impares
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordionOdd" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>
                                <b-row>
                                    <b-col cols="12" md="4" class="mb-2">
                                        <b-row>
                                            <b-col>
                                                <p>Cuando tienen 'n' números impares consecutivos de una serie natural
                                                </p>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <p>Σ = 1+3+5+7+9+.....(2n-3) + (2n-1)</p>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <span class="description">Σ = </span>
                                                <span class="">
                                                    <span class="description">n</span>
                                                    <sup class="expo">2</sup>
                                                </span>
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
                                            <b-col cols="12">
                                                <b-row>
                                                    <b-col>
                                                        <vue-slider v-model="oddNumber" :max="99" :data="oddData" />
                                                    </b-col>
                                                </b-row>
                                                <b-row class="mb-4">
                                                    <b-col>
                                                        <span>Donde n es : {{oddNumber}}</span>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="12">
                                                        {{oddNumber}}
                                                        <sup class="expo">2</sup>
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col cols="12">
                                                        <span> => </span>
                                                        <span class="description">
                                                            {{ oddNumber * oddNumber }}
                                                        </span>
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'Summations',
        created() {
            for (let index = 1; index <= 100; index++) {
                if (index % 2)
                    this.oddData.push(index);
                else
                    this.evenData.push(index);

            }
            console.log(this.evenData)
            console.log(this.oddData)
        },
        data() {
            return {
                naturalNumber: 20,
                evenData: [],
                evenNumber: 14,
                oddData: [],
                oddNumber: 13,
            }
        },
    }
</script>
<style scoped>
    .formula {
        border-bottom: 1px solid;
    }

    .description {
        font-family: "MathJax_Math-italic";
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 35px;
    }

    .expo {
        top: -1.0em;
    }
</style>