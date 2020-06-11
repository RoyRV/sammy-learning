<template>
    <div>
        <div v-if="number">
            <div v-if="number>0">
                <div v-for="index in number" :key="index" style="display: inline-block;">
                    <img :src="iconSvg" style="width: 50px;" />
                </div>
            </div>
            <div v-if="number<0" style="display: flex;align-items: center;">
                <img :src="'/assets/stop.svg'" style="width: 50px;" />
                <div style="display: inline-block;width: 210px;margin:10px;">
                    <small>{{errormsg}}</small>
                </div>
            </div>
        </div>
        <div v-if="!number"><img :src="'/assets/zero.svg'" style="width: 50px;" />
        </div>
    </div>
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