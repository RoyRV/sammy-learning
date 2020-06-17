<template>
    <div>
        MCM
    </div>
</template>
<script>
    import { mathHelper } from '../../helpers';
    export default {
        name: 'MCM',
        created() {
            let factor = mathHelper.decomposePrimeFactor(4984);
            console.log(factor)
        },
    }
</script>