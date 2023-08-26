
function radianToDegree(radian){
    let degree = radian*(180/3.1416);
    let fixResult = degree.toFixed(2);
   return fixResult;
}
let radian = 12;
let result = radianToDegree (radian)
console.log(result);