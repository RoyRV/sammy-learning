<template id="navBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': true }">
        <button id="btnToogleHamburger" class="navbar-toggler" type="button" v-b-toggle.sidebar-backdrop>
            <span class="navbar-toggler-icon"></span>
        </button>
        <b-sidebar id="sidebar-backdrop" backdrop shadow lazy>
            <template v-slot:title>
                <span id="title" @click="goHome">Sammy Learning</span>
                <b-icon-house />
            </template>
            <template v-slot:default="{ hide }">
                <div class="p-3">
                    <nav class="mb-3">
                        <b-nav vertical>
                            <b-nav-item v-for="course in courses" :key="course.CourseId"
                                @click="selectTheme(course.CourseId);hide()">{{course.Title}}
                                <img :src="'/assets/'+course.Icon" width="40px" style="margin-left: 10px;" />
                            </b-nav-item>
                        </b-nav>
                    </nav>
                </div>
            </template>
        </b-sidebar>
    </nav>
</template>
<script>
    import { courseService } from '../services';

    export default {
        name: 'navBar',
        data() {
            return {
                show: true,
                courses: [],
            }
        },
        created() {
            this.courses = courseService.getCourses();
        },

        mounted() {
            let element = document.getElementById("sidebar-backdrop___title__");
            element.style.width = '100%';
            element.style.cursor = "pointer";
        },
        methods: {
            async selectTheme(courseId) {
                await this.redirectTo({ name: 'course', params: { courseId: courseId } });
            },
            async goHome() {
                await this.redirectTo("/");
            },
            async redirectTo(newLocation) {
                try {
                    await this.$router.push(newLocation);
                } catch (error) {
                    /*eslint no-empty: "error"*/
                }
            }

        },
    }
</script>

<style scoped>
    #btnToogleHamburger {
        display: block;
    }

    #title {
        margin-right: 10px;
    }
</style>