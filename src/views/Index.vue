<template>
    <div v-if="courses">
        <div v-for="course in courses" :key="course.CourseId" class="courseItem">
            <b-card header-tag="header">
                <template v-slot:header>
                    <h4 class="mb-0 courseTitle">{{course.Title}}</h4>
                    <img :src="'/assets/'+course.Icon" width="40px" style="margin: 0px 0px 10px 10px;" />
                </template>
                <b-card-text>Header and footers using slots.</b-card-text>
                <b-button @click="selectTheme(course)" variant="info">Leer más</b-button>
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
                console.log("course", course)
                sessionService.setSelectedCourse(course);
                this.$root.$emit('selectCourse', course);
                this.$router.push({ name: 'course', params: { courseId: course.CourseId } });
            }
        },
    }
</script>
<style lang="scss" scoped>
    .courseItem {
        display: inline-flex;
        margin: 10px;
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