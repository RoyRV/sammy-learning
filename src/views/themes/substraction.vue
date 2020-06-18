<template>
    <div>
        <b-row>
            <b-col>
                <h2>Restas</h2>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col cols="6" md="3">
                <b-row>
                    <b-col>
                        <vue-slider v-model="numbers[0]" :max="10" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <span>Si tengo {{numbers[0]}} manzana{{numbers[0]==1?'':'s'}}</span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <FigureComponent v-bind:number="numbers[0]" style="display: inline-block;margin:5px 0px" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col>
                <div>
                    <img :src="'/assets/minus.svg'" style="max-width: 60px;" />
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
                        <span>Y me como {{numbers[1]}} manzana{{numbers[1]==1?'':'s'}}</span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <FigureComponent v-bind:number="numbers[1]" :iconSvg="'/assets/eaten-apple.svg'"
                            style="display: inline-block;margin:5px 0px" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="6" md="3">
                <div>
                    <img :src="'/assets/equal.svg'" style="max-width: 60px;" />
                </div>
            </b-col>
        </b-row>
        <hr />
        <b-row v-if="total>=0">
            <b-col>
                <span>Me quedara en total </span>
                <b-icon id="substractionResult" icon="question-circle" font-scale="1" />
                <b-tooltip target="substractionResult" :title="total.toString()" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <FigureComponent :number="total" style="display: inline-block;margin:5px 0px" />
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import FigureComponent from '@/components/figureComponent.vue';
    export default {
        name: 'Substraction',
        components: { FigureComponent, /*CanvasDrawComponent */ },
        data() {
            return {
                numbers: [4, 2]
            }
        },
        computed: {
            total() {
                return this.numbers[0] - this.numbers[1];
            }
        },
    }
</script>
<style scoped>
    hr {
        border-top-width: 10px;
    }
</style>