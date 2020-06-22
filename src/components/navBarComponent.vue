<template id="navBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': true }">
        <button id="btnToogleHamburger" class="navbar-toggler" type="button" v-b-toggle.sidebar-backdrop>
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="ml-4">
            <b-breadcrumb id="breadcrumb">
                <b-breadcrumb-item @click="goHome">
                    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                    Home
                </b-breadcrumb-item>
                <b-breadcrumb-item v-if="selectedCourse" @click="selectCourse(selectedCourse)">{{selectedCourse.Title}}
                </b-breadcrumb-item>
            </b-breadcrumb>
        </div>

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
                                @click="selectCourse(course);hide()">{{course.Title}}
                                <img :src="'/assets/'+course.Icon" width="40px" style="margin-left: 10px;" />
                            </b-nav-item>
                            <b-nav-item @click="goAbout">Acerca de
                                <img :src="'/assets/info.svg'" width="40px" style="margin-left: 10px;" />
                            </b-nav-item>
                        </b-nav>
                    </nav>
                </div>
            </template>
        </b-sidebar>
    </nav>
</template>
<script>
    import { courseService, sessionService } from '../services';

    export default {
        name: 'navBar',
        data() {
            return {
                show: true,
                courses: [],
                selectedCourse: null
            }
        },
        created() {
            this.courses = courseService.getCourses();
            this.selectedCourse = sessionService.getSelectedCourse();
        },

        mounted() {
            let element = document.getElementById("sidebar-backdrop___title__");
            element.style.width = '100%';
            element.style.cursor = "pointer";
            this.$root.$on('selectCourse', (course) => {
                this.selectedCourse = course;
            })
        },
        methods: {
            async selectCourse(course) {
                sessionService.setSelectedCourse(course);
                this.selectedCourse = course;
                await this.redirectTo({ name: 'course', params: { courseId: course.CourseId } });
            },
            async goHome() {
                sessionService.setSelectedCourse(null);
                this.selectedCourse = null;
                await this.redirectTo("/");
            },
            async goAbout() {
                sessionService.setSelectedCourse(null);
                this.selectedCourse = null;
                await this.redirectTo("/about");
            },
            async redirectTo(newLocation) {
                try {
                    await this.$router.push(newLocation);
                } catch (error) {
                    /*eslint no-empty: "error"*/
                }
            },
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

    #breadcrumb {
        margin-bottom: 0px;
        background-color: #f8f9fa;
    }
</style>