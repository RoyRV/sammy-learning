<template>
    <div>
        <b-row class="mt-5">
            <b-col>
                <h2>Mayor , Igual o Menor</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-row>
                    <b-col>
                        <vue-slider v-model="numbers[0]" :max="10" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span v-if="numbers[0]">{{numbers[0]}}</span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col style="display: contents;">
                        <FigureComponent v-bind:number="numbers[0]" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col>
                <div>
                    <img v-if="numbers[0]>numbers[1]" :src="'/assets/greater.svg'"
                        style="max-width: 50px;min-width: 30px;" />
                    <img v-if="numbers[0]==numbers[1]" :src="'/assets/equal.svg'"
                        style="max-width: 50px;min-width: 30px;" />
                    <img v-if="numbers[0]<numbers[1]" :src="'/assets/less.svg'"
                        style="max-width: 50px;min-width: 30px;" />
                </div>
            </b-col>
            <b-col>
                <b-row>
                    <b-col>
                        <vue-slider v-model="numbers[1]" :max="10" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span v-if="numbers[1]">{{numbers[1]}}</span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col style="display: contents;">
                        <FigureComponent v-bind:number="numbers[1]" />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figureComponent.vue';
    export default {
        name: 'GreaterOrLess',
        components: { FigureComponent, /*CanvasDrawComponent */ },
        data() {
            return {
                numbers: [2, 4]
            }
        },
    }
</script>