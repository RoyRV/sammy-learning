const getMcd = (numbers) => {
    var len, a, b;
    len = numbers.length;
    if (!len) {
        return null;
    }
    a = numbers[0];
    for (var i = 1; i < len; i++) {
        b = numbers[i];
        a = gcd_two_numbers(a, b);
    }
    return a;
}


function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}


export const mcdHelper = {
    getMcd
};