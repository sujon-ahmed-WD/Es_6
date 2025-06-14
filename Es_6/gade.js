//  var friends = ["Brahmi", "karim", "abdul", "sadsd", "heroAlom"];

//  let big_name=friends[0];
//  for (let i = 0; i < friends.length; i++) {
//     let element=friends[i]
//     if(big_name.length<element.length){
//          big_name=element;
//     }
    
    
// }
// console.log(big_name);
 
const monetlySaving=(pamant,levaing_cost)=>{

      let total_pamant=0;
      let total_tax=0;
     for (let i = 0; i < pamant.length; i++) {
        let element = pamant[i];
         total_pamant+=element;
        if(element>=3000){
             const tax= element *0.20;
             total_tax+=tax;    
        }
        
     }
      let savinges=total_pamant-total_tax-levaing_cost;
      if(savinges<=0)
      {
         return 0;
      }
      else{
         return savinges;
      }
}
const res=monetlySaving([1000,2000,2500],5000);
console.log(res);

let numbers=[1,2,3,3,4,4,5,6,7,8,9,10];
let maxnum=Math.max(...numbers);
console.log(maxnum);