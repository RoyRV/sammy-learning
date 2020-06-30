//ALGEBRA

import ExponentPower from '@/views/themes/algebra/exponentPower.vue';
const getAlgebraRouters = () => {
    return [
        {
            path: '/exponentPower', name: 'exponentPower', component: ExponentPower,
        },
    ]
}


export const AlgebraRouter = {
    getAlgebraRouters
}