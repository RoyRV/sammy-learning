import Fractions from '@/views/themes/arithmetic/fractions.vue';
import Mcm from '@/views/themes/arithmetic/mcm.vue';
import Mcd from '@/views/themes/arithmetic/mcd.vue';
import Percentage from '@/views/themes/arithmetic/percentage.vue';
import NumericSystem from '@/views/themes/arithmetic/numericSystem.vue';
import PrimeFactor from '@/views/themes/arithmetic/primeFactor.vue';
import Summations from '@/views/themes/arithmetic/summations.vue';

const getArithmeticRouters = () => {
    return [
        { path: '/fractions', name: 'fractions', component: Fractions, },
        { path: '/mcm', name: 'mcm', component: Mcm, },
        { path: '/mcd', name: 'mcd', component: Mcd, },
        { path: '/percentage', name: 'percentage', component: Percentage, },
        { path: '/numericSystem', name: 'numericSystem', component: NumericSystem, },
        { path: '/primeFactor', name: 'primeFactor', component: PrimeFactor, },
        { path: '/summations', name: 'summations', component: Summations, },
    ];
}

export const ArithmeticRouter = {
    getArithmeticRouters
};