<template>
    <div>
        <b-row class="mt-2">
            <b-col>
                <span>Solución</span>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col>
                <span v-for="(character,index) in characters" :key="index">
                    {{character}} x {{base}}
                    <sup class="expoCircle">{{characters.length - index-1}}</sup>
                    <span v-if="index+1<characters.length">+</span>
                </span>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col>
                <span>Tomamos cada digito del número {{number}}</span>
                <span> y lo multiplicamos por la base exponensiado a la cantidad de cifras restantes</span>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'ContinueExponentComponent',
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
                characters: []
            }
        },
        created() {
            this.convertNumberToDecimal();
        },
        methods: {
            convertNumberToDecimal() {
                this.characters = [];
                let numberAsText = this.number.toString();
                for (let index = 0; index < numberAsText.length; index++) {
                    this.characters.push(numberAsText.charAt(index));
                }
            }
        },
        watch: {
            number: {
                immediate: false,
                deep: true,
                handler() {
                    this.convertNumberToDecimal();
                }
            },
            base: {
                immediate: false,
                deep: true,
                handler() {
                    this.convertNumberToDecimal();
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

    }
</style>