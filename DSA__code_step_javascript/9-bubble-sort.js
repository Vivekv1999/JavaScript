const data = [52, 88, 7, 67, 38];

let bubbleSort = () => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        console.log(data[j+1,";;;;;;"]);
      if (data[j] > data[j+1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
};

bubbleSort()
console.log(data,"data");