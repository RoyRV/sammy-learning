<template>
    <div>
        <b-row>
            <b-col>
                <h2>Sumas</h2>
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
            <b-col cols="6" md="3">
                <div>
                    <img :src="'/assets/plus.svg'" style="max-width: 60px;" />
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
                        <span>Y le sumo {{numbers[1]}} manzana{{numbers[1]==1?'':'s'}}</span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <FigureComponent v-bind:number="numbers[1]" style="display: inline-block;margin:5px 0px" />
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
        <b-row>
            <b-col>
                <span>Tendré en total </span>
                <b-icon id="additionResult" icon="question-circle" font-scale="1" />
                <b-tooltip target="additionResult" :title="total.toString()" />
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <FigureComponent v-bind:number="total" style="display: inline-block;margin:5px 0px" />
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import FigureComponent from '@/components/figureComponent.vue';
    export default {
        name: 'Addition',
        components: { FigureComponent },
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