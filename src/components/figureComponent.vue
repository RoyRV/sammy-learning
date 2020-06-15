<template>
    <b-container>
        <b-row>
            <b-col>
                <div v-if="number">
                    <div v-if="number>0">
                        <div v-for="index in number" :key="index" style="display: contents;">
                            <img :src="iconSvg" class="iconSvg" />
                        </div>
                    </div>
                    <div v-if="number<0">
                        <img :src="'/assets/stop.svg'" style="max-width: 50px;" />
                        <div>
                            <small>{{errormsg}}</small>
                        </div>
                    </div>
                </div>
                <div v-if="!number"><img :src="'/assets/zero.svg'" style="width: 50px;" />
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: 'figureComponent',
        props: {
            number: {
                type: Number
            },
            errormsg: {
                type: String,
                default: 'Lo sentimos, no puedes quitarte más de lo que tenias originalmente'
            },
            iconSvg: {
                type: String,
                default: '/assets/apple.svg'
            }
        }
    }
</script>
<style scoped>
    .iconSvg {
        max-width: 50px;
        min-width: 30px;
    }
</style>