const getMcm = (arr) => {
    var min, range;
    range = arr;
    if (arr[0] > arr[1]) {
        min = arr[1];
    }
    else {
        min = arr[0]
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