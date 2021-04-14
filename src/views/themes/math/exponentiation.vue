<template>
    <div>
        <b-row>
            <b-col cols="12">
                <h2>Exponenciación</h2>
            </b-col>
            <b-col cols="12" class="mt-3">
                <p style="text-align: justify;">Es una operación matemática en la que dada una base real <strong>a</strong> elevada a un exponente entero <strong>n</strong>, hallaremos una expresión llamada potencia <strong>P</strong></p>
                <p  style="text-align: justify;">Significa que multiplicaremos la base  <strong>(a)</strong> tantas veces como el valor del exponente <strong>(n)</strong></p>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col cols="12" md="6">
                <b-row>
                    <b-col>
                        <vue-slider v-model="number" :max="10" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span>Base : {{number}}</span>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" md="6">
                <b-row>
                    <b-col>
                        <vue-slider v-model="exponentialFactor" :max="6" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span>Exponente {{exponentialFactor}}</span>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                <span>La expresión sería : {{number}} a la potencia {{exponentialFactor}}</span>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                <span>Se escribe : {{number}}<sup>{{exponentialFactor}}</sup></span>
            </b-col>
        </b-row>
        <b-row v-if="exponentialFactor" class="mt-4">
            <b-col>
                <span>Seria el número {{number}} multiplicado {{exponentialFactor}}
                    {{exponentialFactor==1?'vez':'veces'}} :</span>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col v-if="exponentialFactor">

                <span v-for="n in exponentialFactor" :key="n">
                    {{number}}
                    <span v-if="n!=exponentialFactor">x</span>
                </span>
            </b-col>
            <b-col v-else>
                <span>Cualquier número a la potencia 0 es 1</span>
            </b-col>
        </b-row>
        <b-row v-if="exponentialFactor>1" class="mt-4">
            <b-col>
                <span>{{Math.pow(number,exponentialFactor)}}</span>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'Exponentiation',
        data() {
            return {
                number: 2,
                exponentialFactor: 2
            }
        },
    }
</script>