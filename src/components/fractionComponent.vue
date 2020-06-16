<template>
    <div>
        <!-- <span>{{numerator}}</span>
        <span>----</span>
        <span>{{denominator}}</span> -->
        <b-row>
            <b-col>
                <span>{{numerator}}</span>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <span>——</span>
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
                type: Number,
                required: true
            },
            denominator: {
                type: Number,
                required: true
            },
        }
    }
</script>