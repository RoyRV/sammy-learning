<template>
    <b-container class="bv-example-row" fluid="sm">
        <b-card class="b-card">
            <div role="tablist">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" role="tab">
                        <b-button block v-b-toggle.accordion-1 variant="info">Ejemplo 1</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>
                                <b-row>
                                    <b-col>a</b-col>
                                    <b-col>b</b-col>
                                    <b-col>c</b-col>
                                </b-row>
                            </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" role="tab">
                        <b-button block v-b-toggle.accordion-2 variant="info">Ejemplo 2</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>A</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </b-card>
    </b-container>
</template>
<script>
    export default {
        name: 'MixinOperations'
    }
</script>
<style scoped>
    .b-card {
        margin-top: 30px;
    }
</style>