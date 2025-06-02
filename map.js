const products=[

    {id:01,name:"xiamoi",decripation:"this is xiamoi",price:500,color:"black"},
    {id:02,name:"iPhone",decripation:"this is xiamoi",price:500,color:"white"},
    {id:03,name:"xiamoi",decripation:"this is xiamoi",price:1500,color:"black"},
    {id:04,name:"xiamoi",decripation:"this is xiamoi",price:2500,color:"green"},


]
const sum=products.map(product=>product.id*2);
console.log(sum);