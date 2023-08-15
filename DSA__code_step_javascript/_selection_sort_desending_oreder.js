let data=[21,3,58,45,5,98,84,49]

function reverseSelectionsort() {
    let maxValue;
    for (let i = 0; i < data.length; i++) {
      maxValue = i;
      for (let j = i; j < data.length; j++) {
        if (data[maxValue] < data[j]) {
          maxValue = j;
        }
      }
      tempData = data[maxValue];
      data[maxValue] = data[i];
      data[i] = tempData;
    }
  }
  reverseSelectionsort()
  console.log(data, "sorted revers--from selection reverse sort-- data");
  