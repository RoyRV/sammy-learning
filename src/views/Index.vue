<template>
    <div v-if="courses" class="container">
        <div v-for="course in courses" :key="course.CourseId" class="section">
            <b-card header-tag="header">
                <template v-slot:header>
                    <h4 class="mb-0 courseTitle">{{course.Title}}</h4>
                    <img :src="'/assets/'+course.Icon" width="40px" style="margin: 0px 0px 10px 10px;" />
                </template>
                <b-card-text>Header and footers using slots.</b-card-text>
                <b-button @click="selectTheme(course.CourseId)" variant="info">Leer más</b-button>
            </b-card>
        </div>
    </div>
</template>
<script>
    import { courseService } from '../services';

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
            click() {
                console.log('aaaa')
            },
            selectTheme(courseId) {
                this.$router.push({ name: 'course', params: { courseId: courseId } });
            }
        },
    }
</script>
<style lang="scss" scoped>
    .container {
        margin-top: 33px;
        margin-bottom: 33px;

        .section {
            display: inline-block;
            margin: 10px;
        }

        .courseTitle {
            display: inline;
        }
    }
</style>