const themes = [
    { CourseId: 1, ThemeId: 1, ThemeTitle: 'Sumas', redirectTo: 'addition' },
    { CourseId: 1, ThemeId: 2, ThemeTitle: 'Resta', redirectTo: 'substraction' },
    { CourseId: 1, ThemeId: 3, ThemeTitle: 'Multiplicación', redirectTo: 'multiplication' },
    { CourseId: 1, ThemeId: 4, ThemeTitle: 'División', redirectTo: 'division' },
    { CourseId: 1, ThemeId: 11, ThemeTitle: 'Mayor/Menor', redirectTo: 'greaterOrLessThan' },
    { CourseId: 1, ThemeId: 5, ThemeTitle: 'Operaciones Combinadas', redirectTo: 'mixedOperations' },
    { CourseId: 1, ThemeId: 6, ThemeTitle: 'Exponenciación', redirectTo: 'division' },
    { CourseId: 1, ThemeId: 7, ThemeTitle: 'Raices', redirectTo: 'division' },
    { CourseId: 1, ThemeId: 8, ThemeTitle: 'MCM', redirectTo: 'division' },
    { CourseId: 1, ThemeId: 9, ThemeTitle: 'MCD', redirectTo: 'division' },
    { CourseId: 1, ThemeId: 10, ThemeTitle: 'Porcentaje', redirectTo: 'percentage' },
];

const getThemesByCourseId = function (courseId) {
    return themes.filter(x => x.CourseId == courseId);
};

export const themeService = {
    getThemesByCourseId,
};
