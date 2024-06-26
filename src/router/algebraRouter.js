//ALGEBRA
import AlgebraIntro from '@/views/themes/algebra/algebraIntro.vue';
import SignsLaw from '@/views/themes/algebra/signsLaw.vue';
import ExponentPower from '@/views/themes/algebra/exponentPower.vue';
import Factoring from '@/views/themes/algebra/factoring.vue';
import NotableProducts from '@/views/themes/algebra/notableProducts.vue';

const getAlgebraRouters = () => {
    return [
        { path: '/introduction', name: 'introduction', component: AlgebraIntro, },
        { path: '/signsLaw', name: 'signsLaw', component: SignsLaw, },
        { path: '/exponentPower', name: 'exponentPower', component: ExponentPower, },
        { path: '/notableProducs', name: 'notableProducs', component: NotableProducts, },
        { path: '/factoring', name: 'factoring', component: Factoring, },
    ]
}


export const AlgebraRouter = {
    getAlgebraRouters
}