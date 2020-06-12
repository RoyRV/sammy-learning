<template>
    <b-container class="bv-example-row" fluid="sm">
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
                            <span v-if="numbers[0]">{{numbers[0]}}</span>
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
                            <span v-if="numbers[1]">{{numbers[1]}}</span>
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
                    <b-row v-if="numbers[1]==0">
                        <b-col>
                            <FigureComponent v-bind:number="-1" errormsg='Operación no permitida' />
                        </b-col>
                    </b-row>
                    <b-row v-if="numbers[0]==0 && numbers[1]!=0">
                        <b-col>
                            <FigureComponent v-bind:number="0" />
                        </b-col>
                    </b-row>
                    <b-row v-if="numbers[0]!=0 && numbers[1]!=0">
                        <b-col>
                            <div v-if="numbers[0]<numbers[1]">
                                <FigureComponent v-bind:number="0" />
                            </div>
                            <div v-if="numbers[0]>=numbers[1]">
                                <h4>Cociente</h4>
                                <div style="display: inline-block;" v-for="(number,index) in numbers[1]" :key="number">
                                    <span>Grupo {{index+1}}</span>
                                    <FigureComponent v-bind:number="quotient" />
                                </div>
                            </div>
                        </b-col>
                        <b-col v-if="residue!=0">
                            <div>
                                <h4>Residuo</h4>
                                <FigureComponent v-bind:number="residue" />
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
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