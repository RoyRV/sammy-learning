<template>
    <div>
        <span>{{number}} {{base}}</span>
    </div>
</template>
<script>
    export default {
        name: 'ContinueExponentComponent',
        props: {
            number: {
                type: Number,
                required: true
            },
            base: {
                type: Number,
                required: true
            }
        }
    }
</script>