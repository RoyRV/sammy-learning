const themes = [
    //Matematica
    { CourseId: 1, ThemeId: 100, ThemeTitle: 'Sumas', redirectTo: 'addition' },
    { CourseId: 1, ThemeId: 101, ThemeTitle: 'Resta', redirectTo: 'substraction' },
    { CourseId: 1, ThemeId: 102, ThemeTitle: 'Multiplicación', redirectTo: 'multiplication' },
    { CourseId: 1, ThemeId: 103, ThemeTitle: 'División', redirectTo: 'division' },
    { CourseId: 1, ThemeId: 104, ThemeTitle: 'Mayor/Menor', redirectTo: 'greaterOrLess' },
    { CourseId: 1, ThemeId: 105, ThemeTitle: 'Exponenciación', redirectTo: 'exponentiation' },
    { CourseId: 1, ThemeId: 106, ThemeTitle: 'Raices', redirectTo: 'square' },
    { CourseId: 1, ThemeId: 107, ThemeTitle: 'Operaciones Combinadas', redirectTo: 'mixedOperations' },
    //Aritmetica
    { CourseId: 2, ThemeId: 200, ThemeTitle: 'Fracciones', redirectTo: 'fractions' },
    { CourseId: 2, ThemeId: 201, ThemeTitle: 'Comparar fracciones', redirectTo: 'compareFractions' },
    { CourseId: 2, ThemeId: 202, ThemeTitle: 'Porcentaje', redirectTo: 'percentage' },
    { CourseId: 2, ThemeId: 203, ThemeTitle: 'Factor Primo', redirectTo: 'primeFactor' },
    { CourseId: 2, ThemeId: 204, ThemeTitle: 'MCM', redirectTo: 'mcm' },
    { CourseId: 2, ThemeId: 205, ThemeTitle: 'MCD', redirectTo: 'mcd' },
    { CourseId: 2, ThemeId: 206, ThemeTitle: 'Sistemas Númericos', redirectTo: 'numericSystem' },
    { CourseId: 2, ThemeId: 207, ThemeTitle: 'Sumatorias', redirectTo: 'summations' },
    { CourseId: 2, ThemeId: 208, ThemeTitle: 'Hallar 2 números, sabiendo...', redirectTo: 'operationsProperties' },
    { CourseId: 2, ThemeId: 209, ThemeTitle: 'Progresiones', redirectTo: 'progressions' },
    { CourseId: 2, ThemeId: 210, ThemeTitle: 'Promedios', redirectTo: 'average' },
    //Algebra
    { CourseId: 3, ThemeId: 300, ThemeTitle: 'Teoria de Exponentes', redirectTo: 'exponentPower' },

    //Algebra
    { CourseId: 7, ThemeId: 700, ThemeTitle: 'Unidades de medida', redirectTo: 'measurementUnits' },
    { CourseId: 7, ThemeId: 701, ThemeTitle: 'Regla de 3 simple', redirectTo: 'ruleOf3Simple' },
    { CourseId: 7, ThemeId: 702, ThemeTitle: 'Regla de 3 compuesto', redirectTo: 'ruleOf3Compound' },
    { CourseId: 7, ThemeId: 703, ThemeTitle: 'Problema sobre edades', redirectTo: 'ageProblems' },
];

const getThemesByCourseId = function (courseId) {
    return themes.filter(x => x.CourseId == courseId);
};

export const themeService = {
    getThemesByCourseId,
};
