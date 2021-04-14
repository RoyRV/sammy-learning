//ALGEBRA
import ExponentPower from '@/views/themes/algebra/exponentPower.vue';
import Factoring from '@/views/themes/algebra/factoring.vue';
const getAlgebraRouters = () => {
    return [
        { path: '/exponentPower', name: 'exponentPower', component: ExponentPower, },
        { path: '/factoring', name: 'factoring', component: Factoring, },
    ]
}


export const AlgebraRouter = {
    getAlgebraRouters
}