<template>
    <div>
        <b-row>
            <b-col>
                <h2>Sumas</h2>
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
                    <img :src="'/assets/plus.svg'" style="max-width: 60px;" />
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
                        <b-col><span v-if="numbers[1]">{{numbers[1]}}</span>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <FigureComponent v-bind:number="numbers[1]" style="display: inline-block;margin:5px 0px" />
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
            <b-container>
                <b-row>
                    <b-col>
                        <FigureComponent v-bind:number="total" style="display: inline-block;margin:5px 0px" />
                    </b-col>
                </b-row>
                <!-- <b-row>
                    <b-col>
                        <CanvasDrawComponent :width="480" :height="480" />
                    </b-col>
                </b-row> -->
            </b-container>
        </b-row>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figureComponent.vue';
    // import CanvasDrawComponent from '../../components/canvasDrawComponent.vue';
    export default {
        name: 'Addition',
        components: { FigureComponent, /*CanvasDrawComponent */ },
        data() {
            return {
                numbers: [2, 4]
            }
        },
        computed: {
            total() {
                var total = 0;
                for (let index = 0; index < this.numbers.length; index++) {
                    total += parseInt(this.numbers[index]);
                }
                return total;
            }
        },
    }
</script>
<style scoped>
    hr {
        border-top-width: 10px;
    }
</style>