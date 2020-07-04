import Addition from '@/views/themes/math/addition.vue';
import Substraction from '@/views/themes/math/substraction.vue';
import Multiplication from '@/views/themes/math/multiplication.vue';
import Division from '@/views/themes/math/division.vue';
import GreaterOrLess from '@/views/themes/math/greaterOrLess.vue';
import MixinOperations from '@/views/themes/math/mixinOperations.vue';
import Exponentiation from '@/views/themes/math/exponentiation.vue';
import Square from '@/views/themes/math/square.vue';


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
    ]
}

export const MathRouter = {
    getMathRouters
}