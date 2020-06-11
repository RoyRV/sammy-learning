<template id="navBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': show }">
        <button class="navbar-toggler" type="button" v-b-toggle.sidebar-backdrop>
            <span class="navbar-toggler-icon"></span>
        </button>
        <b-sidebar id="sidebar-backdrop" title="Sammy Learning" :backdrop-variant="variant" backdrop shadow>
            <template v-slot:default="{ hide }">
                <div class="p-3">
                    <nav class="mb-3">
                        <b-nav vertical>
                            <b-nav-item active @click="hide">Active</b-nav-item>
                            <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                            <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
                        </b-nav>
                    </nav>
                </div>
            </template>
        </b-sidebar>
    </nav>
</template>
<script>
    export default {
        name: 'navBar',
        data() {
            return {
                show: true,
            }
        },
        methods: {

        },
    }
</script>

<style scoped>
    .menu-item {
        padding: 5px;
    }
</style>