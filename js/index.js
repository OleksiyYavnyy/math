function solveQuadrEq(a, b, c) {
    const d = calcDiscr(a, b, c);
    if (d > 0) {
       const x1 = ((-b + Math.sqrt(d))/(2*a));
       const x2 = ((-b - Math.sqrt(d))/(2*a));
        return 'x1 = ' + x1 + ' x2 = ' + x2;
    } else if (d === 0) {
      const  x = -b / (2 * a);
        return 'x = ' + x;
    } else {
        return 'Sorry Michael just math';
    }
}

function calcDiscr(a, b, c){
    const d = b*b-4*a*c;
    return d;
}

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const solution = solveQuadrEq(a, b, c);
alert(solution);