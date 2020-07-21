//Guess
import GuessAnimals from '@/views/themes/guess/guessAnimals.vue';

const getGuessRouters = () => {
    return [
        {
            path: '/guessAnimals', name: 'guessAnimals', component: GuessAnimals,
        },
    ]
}
export const GuessRouter = {
    getGuessRouters
}