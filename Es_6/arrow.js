const difference=(x,y)=>x-y;

const getAge=(person)=>person.age;
const student={name:'suj',age:10}
const age=getAge(student);
console.log(age);

const doubleIt=num => num*2;

// arrow function use Before
function sum(num1,num2)
{
    const res=num1+num2;
    return res
}

// arrow function use after 
const sum=(num1,num2)=>num1+num2
const result=sum(10,20)
console.log(result);