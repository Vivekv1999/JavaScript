//complexity of selection sort
// ---===>>   O(n2)  //=====>loop 2 var chale mate--n2

let data = [20, 25, 7, 85, 42, 11, 65, 43];

function selectionSort() {
  let minValue;
  for (let i = 0; i < data.length; i++) {
    minValue = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[minValue] > data[j]) {
        minValue = j;
      }
    }
    let tempData = data[minValue];
    data[minValue] = data[i];
    data[i] = tempData;
  }
}

selectionSort();
console.log(data, "sorted data");

////==//self------selectionSort-reverse
// let start = 0;
// let end = data.length - 1;
// // for reverse we use bubble sort
// function reverseSort(start, end) {
//     if(start<=end){

//         tempData = data[start];
//         data[start] = data[end];
//         data[end]=tempData
//         reverseSort(start+1,end-1)
//     }

// }
// reverseSort(start, end);
// console.log(data, "sorted revers--from bubble sort-- data");

