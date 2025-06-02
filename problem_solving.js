const oddEven=(array)=>
{
     
    let evennum=[];

    for(let i=0; i<array.length;i++){
         
        const element=array[i];
         
        if(element % 2==0){
            evennum.push(element)
        }
    }
    return evennum;

}

const numbers=[1,2,3,4,5,6,7,8,9,10,11]
const result=oddEven(numbers);
console.log(result);