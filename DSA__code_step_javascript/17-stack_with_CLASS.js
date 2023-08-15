class Stack {
  item = [];
  currentSize;
  maxSize;

  constructor(value) {
    console.log("call cunstrotoe");
    this.maxSize = value;
    this.currentSize = this.item.length; //for access class property use this keyword
  }

  push(val) {
    /// in class for function decelaration does not require FUNCTION keyword
    if (this.currentSize > this.maxSize) {
      console.log("stack is full");
      // alert("Stack is full")   // at here alert is not working because of --not using in html-- we are in terminal so..
    } else {
      this.item[this.currentSize] = val;
      this.currentSize++;
    }
  }

  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      console.log("stack is emplty");
    }
  }

  display() {
    console.log(this.item);
  }
}

let st1 = new Stack(7);
st1.push(20);
st1.push(35);
st1.push(78);
st1.pop();
st1.pop();
st1.pop();
st1.pop();
st1.push(92);
st1.push(54);
st1.push(41);
st1.push(83);
st1.push(94);
st1.push(28);
st1.push(48);
st1.push(67);
st1.push(55);
st1.push(64);
st1.display();
