const num=[1, 2, 3, 4, 5];
const sum=num.reduce((acc,curr)=> acc+curr,0);
console.log(sum);

const prod=num.reduce((acc,curr)=> acc*curr,1);
console.log(prod);