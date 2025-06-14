let test='sujon';
console.log(test);

function Name(first,last='')
{
    const full=first+ ' '+ last;
    return full
}

const a=10;
const b=20;
const res=`The sum of ${a} and ${b} is ${a+b}`;
console.log(res);


function add(a,b){
    return a+b;
}
const sum=add(5,90);
console.log(sum);

// function exparsion

const add2=function(a,b)
{
    return a+b
}
const add3 =(a,b)=>a+b;

const val =add3(10,20);
const val1 =add2(10,20);
console.log(val,val1);

const len=10;
let width=20;
// console.log(len);

const numbers=[1,2,3,4,5,6,7,8,9];
const numbers2=[10,11,12]
console.log(...numbers);