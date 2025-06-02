


const chaekfreands=(array)=>{
    let bigname=array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element.length>bigname.length){
           bigname=element
        }
        
    }
    return bigname


}

const friends=["rofiq","jobber","borkot","salam","tus tus","bangladesh"]

const res=chaekfreands(friends);
console.log(res);
alert()