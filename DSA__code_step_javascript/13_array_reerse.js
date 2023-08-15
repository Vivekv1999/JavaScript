let arr = [2, 5,42, 75];
let end = arr.length - 1;


function reverseArr(start, end) {
    if(start<=end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        reverseArr(start+1,end-1)
    }
}

//with usinf js finction
//==arr.reverse()

reverseArr(0, end);
console.log(arr,"arr")
