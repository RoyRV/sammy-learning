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


export const mathHelper = {
    decomposePrimeFactor,
    getMcm,
    getMcd
}