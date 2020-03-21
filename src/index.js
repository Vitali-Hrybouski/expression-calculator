function eval() {
    // Do not use eval!!!
    return;
}


function bracketsPair(arr) {
    let count = 0;
    arr.forEach(element => {
        if (element === "(") count++;
        if (element === ")") count--;
    });
    if (count !== 0) throw new Error("ExpressionError: Brackets must be paired");
}
function divisionZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === "/") && (arr[i + 2] === "0")) throw new Error("TypeError: Division by zero.");
    }
}

function expressionCalculator(expr) {
    const arrExpr = expr.split("");
    bracketsPair(arrExpr);
    divisionZero(arrExpr);

    let result;
    const noSpaceString = expr.replace(/\s/g, "");
    const getResult = new Function("return " + noSpaceString);
    result = getResult();

    return result;
}

module.exports = {
    expressionCalculator
}
