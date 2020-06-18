const getMcm = (numbers) => {
    var min, range;
    range = numbers;
    if (numbers[0] > numbers[1]) {
        min = numbers[1];
    }
    else {
        min = numbers[0]
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var multiple = min;
    range.forEach(function (n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}

export const mcmHelper = {
    getMcm
};