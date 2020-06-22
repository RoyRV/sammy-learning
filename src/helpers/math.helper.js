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

const convert_base = (number, initial_base, change_base) => {
    if ((initial_base && change_base) < 2 || (initial_base && change_base) > 36)
        return 'Base between 2 and 36';

    return parseInt(number + '', initial_base)
        .toString(change_base);
}


export const mathHelper = {
    decomposePrimeFactor,
    getMcm,
    getMcd,
    getRandomNumber,
    convert_base
}