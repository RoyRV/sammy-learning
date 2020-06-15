<template>
    <div>
        <b-row>
            <b-col>
                <h2>Exponenciación</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container>
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
                </b-container>
            </b-col>
            <b-col>
                <b-container>
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
                </b-container>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                a
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