let obj1={name:"mahesh",age:"23"}
let obj11={name:"mahesh",age:"23"}

console.log(obj1===obj11,"<=== ans fist");

let obj22={name:"mahesh",age:"23"}
let obj222={name:"mahesh",age:"23"}
console.log(JSON.parse(JSON.stringify(obj22))===JSON.parse(JSON.stringify(obj222)),"<=== ans paese and stringify");
console.log(JSON.stringify(obj22)===JSON.stringify(obj222),"<=== ans stringify");


let obj33={name:"mahesh",age:"23"}
let obj333={age:"23",name:"mahesh"}
console.log(JSON.stringify(obj33)===JSON.stringify(obj333),"<=== ans stringify__but position change");

//solution
//with using lodash
//======>  console.log(_.isEqual(obj1, obj2));   //now ans---is true


////
const objAAA = { name: "Jack", age: 25 };
const objBBB = { age: 25, name: "Jack"};
let objIsEqual=false
const objAkeys=Object.keys(objAAA).sort()
const objBkeys=Object.keys(objBBB).sort()
console.log(objAkeys,";;;;");


if(objAkeys.length !== objBkeys.length){
    console.log(objIsEqual);
}else{
    const checkEqual=objAkeys.every((key,i)=>{
        let objAAAvalue=objAAA[key]
        let objBBBvalue=objBBB[objBkeys[i]]
        // let objBBBvalue=objBBB[key]

        return objAAAvalue===objBBBvalue
    })
    if(checkEqual){
        objIsEqual=true
        console.log(objIsEqual);
    }else{
        console.log(objIsEqual);
    }
}

