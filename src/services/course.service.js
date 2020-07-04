const courses = [
    {
        CourseId: 1, Title: "Matemática", Icon: 'math.svg',
        Description: 'Temas como : 4 operaciones , conceptos básicos.'
    },
    {
        CourseId: 2, Title: "Aritmetica", Icon: 'arithmetic.svg',
        Description: 'Temas como : fracciones, multiplos, divisiores'
    },
    {
        CourseId: 3, Title: "Algebra", Icon: 'algebra.svg',
        Description: 'Temas como :Teoria de exponentes, cocientes notables'
    },
    {
        CourseId: 4, Title: "Trigonometria", Icon: 'trigonometry.svg',
        Description: 'Temas como : Medición angular, angulos y triangulos notables'
    },
    {
        CourseId: 5, Title: "Geometria", Icon: 'geometry.svg',
        Description: 'Temas como : geometria, segmento, angulos'
    },
    {
        CourseId: 6, Title: "Fisica", Icon: 'physics.svg',
        Description: 'Temas como Cinematica, Dinamica'
    },
    {
        CourseId: 7, Title: "R.M.", Icon: 'rm.svg',
        Description: 'Temas como : Operadores, Ecuaciones, Edades'
    },
];

const getCourses = () => {
    return courses;
};

const getCourseById = (id) => {
    return courses.find(x => x.CourseId == id);
}

export const courseService = {
    getCourses,
    getCourseById
}