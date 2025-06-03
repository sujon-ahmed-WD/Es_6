 var friends = ["Brahmi", "karim", "abdul", "sadsd", "heroAlom"];

 let big_name=friends[0];
 for (let i = 0; i < friends.length; i++) {
    let element=friends[i]
    if(big_name.length<element.length){
         big_name=element;
    }
    
    
}
console.log(big_name);
let levaing_cost=[];
const monetlySaving=(Array,num)=>{

     for (let i = 0; i < Array.length; i++) {
        const element = Array[i];
        if(element>=3000){
            levaing_cost=element%20;
            return levaing_cost;

        }
        
     }
     if(levaing_cost==0){
        console.log("taka ni ");
     }
}
const res=monetlySaving([1000,2000,2500],204);
console.log(res);