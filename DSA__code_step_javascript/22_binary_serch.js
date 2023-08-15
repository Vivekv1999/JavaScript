///=====>
// when use binary search then ====> array is must be sorted  


let data = [5, 12, 19, 25, 66, 74];
let find = 74;
let start = 0;
let end = data.length - 1;
let position = undefined;

// function binarySearch(){
while (start <= end) {
  //end is lower is not happen ====but in case array is empty then end= -1 so..... we require this confition
  let mid = Math.floor((start + end) / 2);
  if (data[mid] === find) {
    position = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

// }
console.log(position);
// binarySearch()
