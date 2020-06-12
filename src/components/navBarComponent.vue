<template id="navBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': true }">
        <button id="btnToogleHamburger" class="navbar-toggler" type="button" v-b-toggle.sidebar-backdrop>
            <span class="navbar-toggler-icon"></span>
        </button>
        <b-sidebar id="sidebar-backdrop" title="Sammy Learning" backdrop shadow>
            <template v-slot:default="{ hide }">
                <div class="p-3">
                    <nav class="mb-3">
                        <b-nav vertical>
                            <b-nav-item v-for="course in courses" :key="course.CourseId"
                                @click="selectTheme(course.CourseId);hide()">{{course.Title}}
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
            console.log(this.courses);
        },
        methods: {
            selectTheme(courseId) {
                console.log("selectTheme", courseId);
            }
        },
    }
</script>

<style scoped>
    #btnToogleHamburger {
        display: block;
    }
</style>