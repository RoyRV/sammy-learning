import { primeFactorHelper } from './primeFactor.helper';
import { mcmHelper } from './mcm.helper';
import { mcdHelper } from './mcd.helper';

const decomposePrimeFactor = (number) => {
    return primeFactorHelper.decomposePrimeFactor(number);
}
const getMcm = (numbers) => {
    return mcmHelper.getMcm(numbers);
}
const getMcd = (numbers) => {
    return mcdHelper.getMcd(numbers);
}
const getRandomNumber = () => {
    return Math.floor(Math.random() * (100 - 1)) + 1;
}


export const mathHelper = {
    decomposePrimeFactor,
    getMcm,
    getMcd,
    getRandomNumber
}