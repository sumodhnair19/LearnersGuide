//Singly link list


class SinglyLinkList {

  constructor(value) {
  this.head = {
    value,
    next : null
  }
  this.length = 1;
  }

  addNewNode(value) {
    let newValue = {value};
    newValue.next = this.head;
    this.head = newValue;
    this.length = this.length + 1;
    return this;

  }

  removeFromHead() {
    if( this.length ) {
        this.head = this.head.next;
        this.length = this.length - 1;
        return this;
    }

  }


  findNode(value) {
    let node = this.head;
    while(node) {
      if(node.next != null && node.value ===  value) {
        return node;
      }
      node = node.next;
    }

  }

}



class Stack {

constructor() {

this.size = 0;
this.stackObj = {};

}
push(data) {
  this.stackObj[this.size] = data;
  this.size++;
  return this;
}

pop() {
  this.size--;
  delete this.stackObj[this.size];
  return this;
}

}


class Queue {

constructor() {
  this.size = 0;
  this.queueObj = {};
}
unshift(data) {
  if(Object.keys(this.queueObj).length) {
    let duplicateQueueObj = Object.assign({},this.queueObj);
    for(let i in this.queueObj) {
      i = parseInt(i);
      let count = i+1;
      duplicateQueueObj[count] = this.queueObj[i];
    }
      duplicateQueueObj[0] = data;
      this.queueObj = duplicateQueueObj;
  } else
    this.queueObj[this.size] = data;
    this.size++;
  return this;
}

shift() {
  let totalLength = Object.keys(this.queueObj).length;
  if(totalLength) {
    for(let i in this.queueObj) {
      i = parseInt(i);
      let count = i+1;
      this.queueObj[i] = this.queueObj[count];
    }
    delete this.queueObj[totalLength-1];
    this.size--;
  }
  return this;
}
}

  const isAnagram = (input) => input.split('').reverse().join('')=== input ? true :  false;
