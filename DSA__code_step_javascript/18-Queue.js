let data=[]
let currentSize=data.length

function enqueue(value){
    data[currentSize]=value
    currentSize++
}

function display(){
    console.log(data);
}

function dequeue() {
    for(let i=0;i<data.length;i++){
        data[i]=data[i+1]
    }
    data.length=currentSize-1
    
}


enqueue(35)
enqueue(14)
enqueue(85)
enqueue(42)
dequeue()
display()