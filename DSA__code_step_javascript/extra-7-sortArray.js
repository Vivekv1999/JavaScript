function sortArray(){
    const arr=[4,54,6,24,77,46,25,3,57]

    let sort=arr.sort((a,b)=>{
        return a-b
    })

    console.log(sort);
}

///manually
function sortArrayManualy(){
    let arr=[4,54,6,24,77,46,25,3,57]
    let temp=0

    for(let i=0;i<arr.length-1;i++){
        // if(i===0){
            // for(let j=1;j<arr.length;j++)
            if(arr[i]>arr[i+1]){
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
            i=-1
        }
    // }
    console.log(arr);
}





// sortArray()
sortArrayManualy()