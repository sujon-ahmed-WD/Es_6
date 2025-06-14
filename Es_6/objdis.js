const person={
    name:"test",
    age:10,
    friends:["korim","rahim","jabber"]
};
const {friends,age}=person
console.log(friends,age);

const names=["korim","lorem10, mbfs iufb fucb"];
const [a,b,c]=names
console.log(a,b,c);

const sum=(num1,num2)=>num1+num2;

const res=sum(10,20);
console.log(res);