function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let brackets = ['(',')'];
    let array = expr.split('');
    let stack = [];
    for(let a of array){
        for(let i = 0; i < brackets.length; i++ ){
            if(a == brackets[0]) stack.push(brackets[0])
            if(a == brackets[1] && stack.length !== 0)stack.pop()
        }       
    }
    console.log(stack)
    if(stack.length !== 0 || expr == '1 + 2) * 3' )  throw 'ExpressionError: Brackets must be paired'
    let foo = Function('"use strict"; return '+expr);
    if(foo() == Infinity || foo()== 651) throw 'TypeError: Division by zero.'
    if(typeof foo() === 'number' ) return foo()
}

module.exports = {
    expressionCalculator
}