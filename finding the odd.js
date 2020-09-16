/* Print odd numbers in an array */
var odd = [1,3,5,6,7,8,11,13];
odd = odd.filter((num) => (num%2!=0));
console.log(odd);