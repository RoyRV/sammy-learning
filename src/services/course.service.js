const courses = [
    { CourseId: 1, Title: "Matemática", Icon: 'math.svg' },
    { CourseId: 2, Title: "Aritmetica", Icon: 'arithmetic.svg' },
    { CourseId: 3, Title: "Algebra", Icon: 'algebra.svg' },
    { CourseId: 4, Title: "Trigonometria", Icon: 'trigonometry.svg' },
    { CourseId: 5, Title: "Geometria", Icon: 'geometry.svg' },
    { CourseId: 6, Title: "Fisica", Icon: 'physics.svg' },
];

const getCourses = function () {
    return courses;
};

export const courseService = {
    getCourses,
}