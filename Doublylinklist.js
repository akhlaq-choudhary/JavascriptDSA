class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    // initially tail will be same as head
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new DoublyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new DoublyNode(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index >= this.length || index < 0) {
      console.log("Please input index from 0 to length-1");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length - 1) {
      this.append(value);
      return;
    }
    const newNode = new DoublyNode(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    this.length++;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }
    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.prev = leader;
    this.length--;
  }
}
const myLinkList = new DoublyLinkList(10);
myLinkList.append(12);
myLinkList.append(100);
myLinkList.prepend(72);
myLinkList.insert(2, 121);
myLinkList.remove(4);
myLinkList.remove(0);
console.log(myLinkList.printList());
console.log(myLinkList);
// console.log(myLinkList.length);
