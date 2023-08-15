////madratory to array in ----sequence,,ex--3,4,8,17,34,67,..

function mergeArrWhileLoop() {
  const arr = [1, 6, 8, 18, 23, 55];
  const arr2 = [2, 5, 13, 16, 25];
  let arr3 = [];

  let d1 = 0;
  let d2 = 0;
  let d3 = 0;

  while (d1 < arr.length && d2 < arr2.length) {
    if (arr[d1] < arr2[d2]) {
      arr3[d3] = arr[d1];
      d1++;
    } else {
      arr3[d3] = arr2[d2];
      d2++;
    }
    d3++;
  }

  while (d1 < arr.len9) {
    console.log(arr3);
  }
}

mergeArrWhileLoop();
