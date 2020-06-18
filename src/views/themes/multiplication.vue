<template>
    <div>
        <b-row>
            <b-col>
                <h2>Multiplicación</h2>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col cols="6" md="3">
                <b-row>x
                    <b-col>
                        <vue-slider v-model="numbers[0]" :max="10" />
                    </b-col>
                </b-row>
                <b-row class="mb-4">
                    <b-col>
                        <span>Si hay {{numbers[0]}} niño{{numbers[0]==1?'':'s'}}</span>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="6" md="3">
                <div>
                    <img :src="'/assets/multiplication.svg'" style="max-width: 50px;" />
                </div>
            </b-col>
            <b-col cols="6" md="3">
                <b-row>
                    <b-col>
                        <vue-slider v-model="numbers[1]" :max="10" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span>Y cada niño tiene {{numbers[1]}} manzana{{numbers[1]==1?'':'s'}}</span>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="6" md="3">
                <div>
                    <img :src="'/assets/equal.svg'" style="max-width: 50px  ;" />
                </div>
            </b-col>
        </b-row>
        <hr />
        <b-row class="mt-4">
            <b-col>
                <p>Serian {{numbers[0]}} veces {{numbers[1]}}</p>
                <span>Tendré en total</span>
                <b-icon id="multiplicationResult" icon="question-circle" font-scale="1" />
                <b-tooltip target="multiplicationResult" :title="(numbers[0]*numbers[1]).toString()" />
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                <b-row v-if="numbers[0]==0 || numbers[1]==0">
                    <b-col>
                        <FigureComponent v-bind:number="0" />
                    </b-col>
                </b-row>
                <b-row v-else>
                    <b-col>
                        <div v-for="(number,index) in numbers[0]" :key="index" class="md-layout">
                            <FigureComponent v-bind:number="numbers[1]" />
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import FigureComponent from '@/components/figureComponent.vue';
    export default {
        name: 'Multiplication',
        components: { FigureComponent },
        data() {
            return {
                numbers: [2, 4]
            }
        },
    }
</script>
<style scoped>
    hr {
        border-top-width: 10px;
    }
</style>