module.exports = function reverse(n) {
    let result = Math.abs(n);
    result = new String(result);
    result = result.split("");

    return result.reverse().join("");
};
