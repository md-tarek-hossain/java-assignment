
function sum (i){
    console.log(i)
    if ( i=== 1){
        return 1;
    }
//   return sum = i + (i-1)
  return i + sum(i-1)
        
}
let result = sum(5)
console.log(result);
// -------------------

// for (let i = 0; i<= 5; i++){
//     sum = sum + i
//     console.log(sum);
//     }