<template>
    <div>
        <b-row>
            <b-col>
                <h3>Lo sentimos, la página que esta buscando no existe</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="imgContainer">
                    <img :src="'/assets/page-not-found.svg'" class="sorryIcon" />
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default {
        name: 'PageNotFound'
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
            max-width: 200px;
        }
    }
</style>