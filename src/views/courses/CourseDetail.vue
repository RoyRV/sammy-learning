<template>
    <div class="container">
        <div class="section">
            <h2>{{course.Title}}</h2>
            <img :src="'/assets/'+course.Icon" width="40px" style="margin: 0px 0px 10px 10px;" />
        </div>
        <div class="section">
            <div v-for="theme in themes" :key="theme.ThemeId" class="section themeItem">
                <b-card header-tag="header">
                    <template v-slot:header>
                        <h4 class="mb-0 courseTitle">{{theme.ThemeTitle}}</h4>
                    </template>
                    <b-button @click="selectTheme(theme.ThemeId)" variant="primary">Aprender</b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import { courseService, themeService } from '../../services';
    export default {
        name: 'CourseDetail',
        data() {
            return {
                themes: [],
                course: 0
            }
        },
        created() {
            this.course = courseService.getCourseById(this.$route.params.courseId);
            console.log("this.course", this.course);
            this.themes = themeService.getThemesByCourseId(this.course.CourseId);
        },
        methods: {
            selectTheme(themeId) {
                console.log("themeId", themeId);
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

            h2 {
                display: inline-block;
            }
        }

        .courseTitle {
            display: inline;
        }
    }

    .themeItem {
        /* width: 319px; */
    }
</style>