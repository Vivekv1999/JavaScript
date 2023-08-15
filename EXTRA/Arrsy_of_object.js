const fruits=[
    {apple:2,banana:3,mengo:5},
    {pinepal:8,geaphs:10,mengo:5},
    {banana:2,banana:7,chiku:3},
]

let newFruits={}

fruits.forEach((elem)=>{
    // console.log(elem,"elem --for each");
    for(each in elem){
        console.log(each,"lllll");
        if(newFruits[each]){
newFruits[each]=newFruits[each]+elem[each]
console.log(newFruits[each],";;;;;;;;;;");
        }else{
            console.log(newFruits[each]=elem[each],"each");
newFruits[each]=elem[each]
        }
    }
})

console.log(newFruits,"last--newfruits");