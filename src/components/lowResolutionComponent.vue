<template>
    <div>
        <b-row>
            <b-col>
                <h3>Lo sentimos, no podemos mostrar este contenido en una resolución
                    menor
                    de {{resolution}}px</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="imgContainer">
                    <img :src="'/assets/sorry.svg'" class="sorryIcon" />
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'LowResolutionComponent',
        props: {
            resolution: {
                type: Number
            },
        }
    }
</script>
<style scoped>
    .imgContainer {
        display: flex;
        align-content: center;
        justify-content: center;
    }

    @media (max-width:240px) {
        .sorryIcon {
            width: 100%;
        }
    }

    @media (max-width:780px) {
        .sorryIcon {
            max-width: 100%;
        }
    }
</style>