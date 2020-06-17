import { primeFactorHelper } from './primeFactor.helper';
import { mcmHelper } from './mcm.helper';

const decomposePrimeFactor = (number) => {
    return primeFactorHelper.decomposePrimeFactor(number);
}
const getMcm = (arr) => {
    return mcmHelper.getMcm(arr);
}


export const mathHelper = {
    decomposePrimeFactor,
    getMcm
}