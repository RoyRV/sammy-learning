<template>
    <div>
        <b-row>
            <b-col>
                <h2>División</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container>
                    <b-row>
                        <b-col>
                            <vue-slider v-model="numbers[0]" :max="50" />
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <span>Tengo {{numbers[0]}} manzana{{numbers[0]==1?'':'s'}}</span>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col>
                <div>
                    <img :src="'/assets/division.svg'" style="max-width: 60px;" />
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container>
                    <b-row>
                        <b-col>
                            <vue-slider v-model="numbers[1]" :max="50" />
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <span>Debo repartirlas entre {{numbers[1]}}
                                persona{{numbers[1]==1?'':'s'}}</span>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col>
                <div>
                    <img :src="'/assets/equal.svg'" style="max-width: 60px;" />
                </div>
            </b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col>
                <b-container>
                    <b-row v-if="numbers[1]===0">
                        <b-col>
                            <FigureComponent v-bind:number="-1" errormsg='Operación no permitida' />
                        </b-col>
                    </b-row>
                    <b-row v-else>
                        <b-col>
                            <div style="margin:0 10px">
                                <h4>Le tocaria a cada uno {{quotient}}</h4>
                                <div v-if="numbers[0]<numbers[1]">
                                    <div style="display: inline-block;">
                                        <FigureComponent v-bind:number="quotient" />
                                    </div>
                                </div>
                                <div v-else>
                                    <div style="display: inline-block;" v-for="(number,index) in numbers[1]"
                                        :key="number">
                                        <span>Persona {{index+1}}</span>
                                        <FigureComponent v-bind:number="quotient" />
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="1" v-if="residue">
                            <h4>Y</h4>
                        </b-col>
                        <b-col cols="5" v-if="residue">
                            <div>
                                <h4>Me sobrarian {{residue}} (Residuo)</h4>
                                <FigureComponent v-bind:number="residue" />
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figureComponent.vue';
    export default {
        name: 'Division',
        components: { FigureComponent },
        data() {
            return {
                numbers: [6, 3]
            }
        },
        computed: {
            quotient() {
                return Math.floor(this.numbers[0] / this.numbers[1]);
            },
            residue() {
                return (this.numbers[0] % this.numbers[1]);
            }
        },
    }
</script>
<style scoped>
    hr {
        border-top-width: 10px;
    }
</style>