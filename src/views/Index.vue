<template>
    <div v-if="courses">
        <div v-for="course in courses" :key="course.CourseId" class="courseItem">
            <b-card no-body header-tag="header">
                <template v-slot:header>
                    <div class="header">
                        <h4 class="mb-0 courseTitle">{{course.Title}}</h4>
                        <img :src="'/assets/'+course.Icon" width="40px" style="margin: 0px 0px 10px 10px;" />
                    </div>
                </template>
                <b-card-body class="body">
                    <b-card-text>{{course.Description}}</b-card-text>
                    <b-button @click="selectTheme(course)" variant="info">Ver temas</b-button>
                </b-card-body>
            </b-card>
        </div>
    </div>
</template>
<script>
    import { courseService, sessionService } from '../services';

    export default {
        name: 'Index',
        data() {
            return {
                courses: [],
            }
        },
        created() {
            this.courses = courseService.getCourses();
        },
        methods: {
            selectTheme(course) {
                sessionService.setSelectedCourse(course);
                this.$root.$emit('selectCourse', course);
                this.$router.push({ name: 'course', params: { courseId: course.CourseId } });
            }
        },
    }
</script>
<style lang="scss" scoped>
    .header:hover {}

    .body {
        height: 142px;
    }

    .courseItem {
        display: inline-block;
        margin: 10px;
        width: 300px;
        height: 219px;
    }

    .courseTitle {
        display: inline;
    }

    @media (max-width:298px) {
        .courseItem {
            display: block;
        }
    }
</style>