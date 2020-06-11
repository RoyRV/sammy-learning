<template>
    <div class="container">
        <div class="section">
            <h2>Sumas</h2>
        </div>
        <div class="section">
            <FigureComponent v-bind:number="4" style="display: inline-block;margin:5px 0px" />
        </div>
    </div>
</template>
<script>
    import FigureComponent from '../../components/figureComponent.vue';
    export default {
        name: 'Addition',
        components: { FigureComponent },
        data() {
            return {
                numbers: [2, 4]
            }
        },
    }
</script>