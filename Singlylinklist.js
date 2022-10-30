class SinglyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    // initially tail will be same as head
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new SinglyNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new SinglyNode(value);
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
    const newNode = new SinglyNode(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
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
      this.length--;
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    if (index === this.length - 1) {
      this.tail = leader;
    }
    this.length--;
  }
  reverse() {
    if (!this.head.next) return this;
    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}
const myLinkList = new SinglyLinkList(1);
myLinkList.append(2);
myLinkList.append(3);
myLinkList.prepend(0);
myLinkList.insert(3, 4);
myLinkList.append(5);
myLinkList.append(6);
myLinkList.remove(0);
myLinkList.reverse();
console.log(myLinkList.printList());
console.log(myLinkList);
console.log(myLinkList.length);
