let data=[]
let currentsize=data.length
let max=5;

function push(value){
    if(currentsize>=max){
        // alert("stack is full, you can not add"+ value)   ///for uding aler //we define this alll in html
    }
    data[currentsize]=value
    currentsize++
}

function pop(){
    if(currentsize>0){
    currentsize--
    data.length=currentsize
    }
    else{
        // alert("stack is empty,,,")
    }

}


push(52)
push(5)
push(82)
push(53)


pop()   //uncomment this for pop use check
// pop()


push(78)

console.log(data,"data");
// push(87)
// push(46)
// push(52)


let a = { age: 29, name: 'Dionysia'};
let b = { name: 'Dionysia', age: 29};

console.log(JSON.stringify(a) === JSON.stringify(b),"annnnssswer");