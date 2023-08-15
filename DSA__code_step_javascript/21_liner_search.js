// linerserach complexity is ===> O{n}
let data=[5,58,42,9,54,62,48]
let elem=48
let position=undefined

for(let i=0;i<data.length;i++){
    if(data[i]=elem){
        position=i
        break;
    }
}

console.log(position);

