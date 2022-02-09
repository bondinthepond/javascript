class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // constructor() {
  //   this.head = null;
  //   this.tail = null;
  //   this.legnth = 0;
  // }
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  /* Push
  create new node
  Point Last Node to it
  point Tail pointer to it
  inserting a node to an empty list  
  */

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; //don't forget to ++ length
    return this;
  }

  /* Pop 
  3 cases - multiple item, 0 items, 1 item
  To solve - use 2 pointer - temp and pre - pre pointing to the previous element of temp

  */
  pop() {
    if (this.head == null) return undefined; //empty list

    //2 or more items
    let temp, pre;
    temp = this.head;
    pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  /* Unshift
  create new node and add at the beginning 
  */
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /* Shift 
Remove node from the beginning
*/
  shift() {
    if (this.head == null) {
      console.log("list empty");
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp;
      temp = this.head.next;
      this.head.next = null;
      this.head = temp;
      /* Alternative approach
      temp = this.head;
      this.head = this.head.next;
      temp.next = null
      */
    }
    this.length--;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      console.log("Index Out of Bounds");
    } else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp;
    }
  }

  /* Set the value at the index */
  set(index, value) {}
  insert(index, value) {} //create new node and add in the middle
}

let myLinkedList = new LinkedList(10);
myLinkedList.push(7);
myLinkedList.push(4);
myLinkedList.pop();
myLinkedList.unshift(9);

myLinkedList.shift();

myLinkedList.push(7);
myLinkedList.push(4);
myLinkedList.unshift(9);

console.log(myLinkedList);

console.log(myLinkedList.get(3));
