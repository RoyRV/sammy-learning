<template>
    <b-container class="bv-example-row" fluid="sm">
        <b-row>
            <b-col>
                <h2>Restas</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container>
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
                        <b-col>
                            <FigureComponent v-bind:number="numbers[0]" style="display: inline-block;margin:5px 0px" />
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col>
                <div>
                    <img :src="'/assets/minus.svg'" style="width: 60px;" />
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-container>
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
                        <b-col>
                            <FigureComponent v-bind:number="numbers[1]" :iconSvg="'/assets/eaten-apple.svg'"
                                style="display: inline-block;margin:5px 0px" />
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col>
                <div>
                    <img :src="'/assets/equal.svg'" style="width: 60px;" />
                </div>
            </b-col>
        </b-row>
        <hr />
        <b-row>
            <b-container>
                <b-row>
                    <b-col>
                        <FigureComponent v-bind:number="total" style="display: inline-block;margin:5px 0px" />
                    </b-col>
                </b-row>
            </b-container>
        </b-row>
    </b-container>
</template>
<script>
    import FigureComponent from '../../components/figureComponent.vue';
    export default {
        name: 'Substraction',
        components: { FigureComponent, /*CanvasDrawComponent */ },
        data() {
            return {
                numbers: [2, 4]
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