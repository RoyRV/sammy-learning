<template>
    <div>
        <div v-if="number>=base">
            <b-row>
                <b-col>
                    <span>Solución</span>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <span>Dividimos de manera sucesiva el # {{number}} entre {{base}},</span>
                    <br />
                    <span>Hasta que el último cociente ya no se pueda dividir</span>
                </b-col>
            </b-row>
            <b-row v-for="(quotient,index) in quotients" :key="index" class="mt-2">
                <b-col cols="6" md="3">
                    <span>División #{{index+1}}</span>
                </b-col>
                <b-col v-if="index==0" cols="6" md="3">
                    <span>{{number}} entre {{base}}</span>
                </b-col>
                <b-col v-else cols="6" md="3">
                    <span>{{quotients[index-1]}} entre {{base}}</span>
                </b-col>
                <b-col cols="6" md="3">
                    <span>Cociente {{quotients[index]}}</span>
                    <sup v-if="index+1==quotients.length" class="expoCircle">1</sup>
                </b-col>
                <b-col cols="6" md="3">
                    <span>Residuo {{residues[index]}}</span>
                    <sup class="expoCircle">{{quotients.length-index+1}}</sup>
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col>
                    <span>Tomo el ultimo cociente {{quotients[quotients.length-1]}}</span>
                    <span> y continuo desde el ultimo residuo , hasta el primer residuo</span>
                    <span> en el orden que indican</span>
                </b-col>
            </b-row>
        </div>
        <div v-else>
            <b-row>
                <b-col>
                    <span>Dado que {{number}} es menor la base ({{base}}) y no puede dividirse, se mantiene</span>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ContinueDivisionComponent',
        props: {
            number: {
                type: Number,
                required: true
            },
            base: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                quotients: [],
                residues: []
            }
        },
        created() {
            this.decomposeDivisions();
        },
        methods: {
            decomposeDivisions() {
                this.quotients = [];
                this.residues = [];
                let quotient = 0; let residue = 0;
                quotient = this.number;
                while (quotient >= this.base) {
                    residue = quotient % this.base;
                    quotient = Math.floor(quotient / this.base);
                    this.quotients.push(quotient);
                    this.residues.push(residue);
                }
            }
        },
        watch: {
            number: {
                immediate: false,
                deep: true,
                handler() {
                    this.decomposeDivisions();
                }
            },
            base: {
                immediate: false,
                deep: true,
                handler() {
                    this.decomposeDivisions();
                }
            }
        },
    }
</script>
<style scoped>
    .expoCircle {
        border-radius: 100%;
        width: 5px;
        height: 5px;
        padding: 1px;

        border: 1px solid gray;
        color: black;
        margin-left: 3px;
    }
</style>