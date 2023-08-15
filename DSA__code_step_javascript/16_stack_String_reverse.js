const data = [];
let currentSize = data.length;

function push(x) {
  data[currentSize] = x;
  currentSize++;
}

function pop() {
    let newVaule=data[currentSize-1]
  currentSize--;
  data.length = currentSize;
  return newVaule
}

function reverseString(str) {
  for (let i = 0; i < str.length; i++) {
    push(str[i])
  }
  for(let i=0;i<str.length;i++){
    str[i]=pop()
  }
}

let str = "anil";
str = str.split("");

str.length > 0 && reverseString(str);
str=str.join("")

console.log(str, "str",data);