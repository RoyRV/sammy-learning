const decomposePrimeFactor = (number) => {
    let primeFactor = 2;
    let factorCounter = 0;
    let output = '';

    while (number > 1) {
        factorCounter = 0;

        while ((number % primeFactor) == 0) {
            //factor encontrado
            ++factorCounter;
            number /= primeFactor;
        }

        if (factorCounter > 0) {
            output = output + " " + primeFactor + "*" + (factorCounter);
        }
        primeFactor++;
    }
    return output.trim();
}
export const primeFactorHelper = {
    decomposePrimeFactor
}