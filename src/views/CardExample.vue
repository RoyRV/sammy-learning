<template>
    <div>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" role="tab">
                <b-button block v-b-toggle.accordion variant="info">Ejemplo
                </b-button>
            </b-card-header>
            <b-collapse id="accordion" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>
                        <span>AAA</span>
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>
<script>
    export default {

    }
</script>