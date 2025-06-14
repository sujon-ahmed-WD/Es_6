const oddEven=(array)=>
{
    let even_num=[]
     
    for(let i=0; i<array.length;i++){
        if(array[i]%2==0){
            even_num.push(array[i])
        }
    }
    return even_num;

}

const numbers=[1,2,3,4,5,6,7,8,9,10,11]
const result=oddEven(numbers)
console.log(result);