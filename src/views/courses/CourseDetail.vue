<template>
    <div class="container">
        <div class="section">

        </div>
        <div class="section">
            <div class="container">
                <div v-for="theme in themes" :key="theme.ThemeId" class="section themeItem">
                    <b-card header-tag="header">
                        <template v-slot:header>
                            <h4 class="mb-0 courseTitle">{{theme.ThemeTitle}}</h4>
                        </template>
                        <b-card-text>Header and footers using slots.</b-card-text>
                        <b-button @click="selectTheme(theme.ThemeId)" variant="primary">Aprender</b-button>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { themeService } from '../../services';
    export default {
        name: 'CourseDetail',
        data() {
            return {
                themes: [],
                courseId: 0
            }
        },
        created() {
            this.courseId = this.$route.params.courseId;
            this.themes = themeService.getThemesByCourseId(this.courseId);
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
        }

        .courseTitle {
            display: inline;
        }
    }

    .themeItem {
        width: 319px;
    }
</style>