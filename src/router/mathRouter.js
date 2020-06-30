import Addition from '@/views/themes/math/addition.vue';
import Substraction from '@/views/themes/math/substraction.vue';
import Multiplication from '@/views/themes/math/multiplication.vue';
import Division from '@/views/themes/math/division.vue';
import GreaterOrLess from '@/views/themes/math/greaterOrLess.vue';
import MixinOperations from '@/views/themes/math/mixinOperations.vue';
import Exponentiation from '@/views/themes/math/exponentiation.vue';
import Square from '@/views/themes/math/square.vue';
import Fractions from '@/views/themes/math/fractions.vue';
import Mcm from '@/views/themes/math/mcm.vue';
import Mcd from '@/views/themes/math/mcd.vue';
import Percentage from '@/views/themes/math/percentage.vue';
import NumericSystem from '@/views/themes/math/numericSystem.vue';

const getMathRouters = () => {
    return [
        { path: '/addition', name: 'addition', component: Addition, },
        { path: '/substraction', name: 'substraction', component: Substraction, },
        { path: '/multiplication', name: 'multiplication', component: Multiplication, },
        { path: '/division', name: 'division', component: Division, },
        { path: '/greaterOrLess', name: 'greaterOrLess', component: GreaterOrLess, },
        { path: '/mixedOperations', name: 'mixedOperations', component: MixinOperations, },
        { path: '/exponentiation', name: 'exponentiation', component: Exponentiation, },
        { path: '/square', name: 'square', component: Square, },
        { path: '/fractions', name: 'fractions', component: Fractions, },
        { path: '/mcm', name: 'mcm', component: Mcm, },
        { path: '/mcd', name: 'mcd', component: Mcd, },
        { path: '/percentage', name: 'percentage', component: Percentage, },
        { path: '/numericSystem', name: 'numericSystem', component: NumericSystem, },
    ]
}

export const MathRouter = {
    getMathRouters
}