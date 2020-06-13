<template>
    <div>
        <b-row>
            <b-col>
                <h2>Multiplicación</h2>
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
                </b-container>
            </b-col>
            <b-col>
                <div>
                    <img :src="'/assets/multiplication.svg'" style="max-width: 60px;" />
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
            <b-col>
                <b-container>
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
                </b-container>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figureComponent.vue';
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