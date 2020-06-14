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
                <div>
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
<style>
    @media (max-width:780px) {
        .sorryIcon {
            max-width: 200px;
        }
    }
</style>