const themes = [
    { CourseId: 1, ThemeId: 1, ThemeTitle: 'Sumas', redirectTo: 'addition' },
    { CourseId: 1, ThemeId: 2, ThemeTitle: 'Resta', redirectTo: 'substraction' },
    { CourseId: 1, ThemeId: 3, ThemeTitle: 'Multiplicación', redirectTo: 'multiplication' },
    { CourseId: 1, ThemeId: 4, ThemeTitle: 'División', redirectTo: 'division' },
    { CourseId: 1, ThemeId: 5, ThemeTitle: 'Mayor/Menor', redirectTo: 'greaterOrLess' },
    { CourseId: 1, ThemeId: 6, ThemeTitle: 'Exponenciación', redirectTo: 'exponentiation' },
    { CourseId: 1, ThemeId: 7, ThemeTitle: 'Raices', redirectTo: 'square' },
    { CourseId: 1, ThemeId: 8, ThemeTitle: 'Fracciones', redirectTo: 'fractions' },
    { CourseId: 1, ThemeId: 9, ThemeTitle: 'Porcentaje', redirectTo: 'percentage' },
    { CourseId: 1, ThemeId: 10, ThemeTitle: 'MCM', redirectTo: 'mcm' },
    { CourseId: 1, ThemeId: 11, ThemeTitle: 'MCD', redirectTo: 'mcd' },
    { CourseId: 1, ThemeId: 12, ThemeTitle: 'Operaciones Combinadas', redirectTo: 'mixedOperations' },
    { CourseId: 1, ThemeId: 13, ThemeTitle: 'Sistemas Númericos', redirectTo: 'numericSystem' },
];

const getThemesByCourseId = function (courseId) {
    return themes.filter(x => x.CourseId == courseId);
};

export const themeService = {
    getThemesByCourseId,
};
