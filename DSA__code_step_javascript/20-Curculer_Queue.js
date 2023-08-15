class Queue {
  constructor(size) {
    this.max = size;
    this.item = new Array(size);
    this.rear = -1;
    this.front = -1;
    this.currentSize = 0;
  }
  enqueue(value) {
    if (this.currentSize != this.max) {
        if (this.rear == this.max - 1) {
          this.rear = 0;
        } else {
          this.rear++;
        }
        this.item[this.rear] = value;
        this.currentSize++; 
        if (this.front == -1) {
          this.front = this.rear;
      }
    } else {
      console.log("stack is Full");
    }
  }

dequeue(){
    if(this.currentSize !=0){
        this.item[this.front]=null
        if(this.front==this.max-1){
            this.front=0
        }else{
            this.front++
        }
        this.currentSize--
    }else{
        this.front=-1
        this.rear=-1
        console.log("queue is empty");
    }
}
}

let queue = new Queue(5);

queue.enqueue(4)
queue.enqueue(54)
// queue.dequeue()
queue.enqueue(28)
queue.enqueue(77)
queue.enqueue(69)
queue.dequeue()
queue.enqueue(72)
// queue.dequeue()
// queue.enqueue(52)
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.enqueue(68)
// queue.enqueue(98)


console.log(queue);
