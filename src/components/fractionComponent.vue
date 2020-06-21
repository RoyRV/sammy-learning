<template>
    <div>
        <b-row>
            <b-col>
                <span>{{numerator}}</span>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <span v-if="numerator.length">——————</span>
                <span v-else>——</span>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <span>{{denominator}}</span>
            </b-col>
        </b-row>

    </div>
</template>
<script>
    export default {
        name: 'FractionComponent',
        props: {
            numerator: {
                // type: String,
                required: true
            },
            denominator: {
                // type: String,
                required: true
            },
        }
    }
</script>