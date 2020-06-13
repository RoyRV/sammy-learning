<template>
    <b-container>
        <b-card class="b-card">
            <b-row>
                <b-col>
                    <h2>{{course.Title}}</h2>
                    <img :src="'/assets/'+course.Icon" style="max-width:40px;margin: 0px 0px 10px 10px;" />
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <div v-for="theme in themes" :key="theme.ThemeId" class="card themeSection">
                        <header class="card-header">
                            <h4 class="mb-0 word-wrap">{{theme.ThemeTitle}}</h4>
                        </header>
                        <div class="card-body themeBody">
                            <b-button class="word-wrap" @click="selectTheme(theme.redirectTo)" variant="info">
                                Aprender
                            </b-button>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
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
            this.themes = themeService.getThemesByCourseId(this.course.CourseId);
        },
        methods: {
            selectTheme(redirectTo) {
                this.$router.push({ name: redirectTo })
            }
        },
    }
</script>
<style lang="scss" scoped>
    .b-card {
        margin-top: 30px;
    }

    h2 {
        display: inline-block;
        word-break: break-all;
    }

    .themeSection {
        display: inline-flex;
        margin: 10px;
        min-width: 180px;
        max-width: 250px;
        min-height: 140px;

        .themeBody {
            justify-content: center;
            align-items: center;
            display: flex;
            padding: 10px 0;
        }
    }

    .word-wrap {
        word-break: break-word;
    }

    @media (max-width: 250px) {
        .themeSection {
            min-width: 0px;
        }
    }
</style>