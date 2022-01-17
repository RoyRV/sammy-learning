import { primeFactorHelper } from './primeFactor.helper';
import { mcmHelper } from './mcm.helper';
import { mcdHelper } from './mcd.helper';
import { simplify } from 'mathjs';

const decomposePrimeFactor = (number) => {
    return primeFactorHelper.decomposePrimeFactor(number);
}
const getMcm = (numbers) => {
    return mcmHelper.getMcm(numbers);
}
const getMcd = (numbers) => {
    return mcdHelper.getMcd(numbers);
}

const canConvertBase = (number, currentBase) => {
    let numberAsText = number.toString();
    for (let index = 0; index < numberAsText.length; index++) {
        const digitAt = numberAsText.charAt(index)
        if (+digitAt >= currentBase) {
            return false;
        }
    }
    return true;
}

const convertNumberToBase = (number, initial_base, change_base) => {
    if ((initial_base && change_base) < 2 || (initial_base && change_base) > 36)
        return 'Base between 2 and 36';

    return parseInt(number + '', initial_base).toString(change_base);
}

const getSimplifiedFraction = (n1, n2) => {
    if (n1 / n2 == 1) return '';
    return simplify(n1 + '/' + n2).toString();
}

const getRandomNumber = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


export const mathHelper = {
    decomposePrimeFactor,
    getMcm,
    getMcd,
    getRandomNumber,
    canConvertBase,
    convertNumberToBase,
    getSimplifiedFraction
}