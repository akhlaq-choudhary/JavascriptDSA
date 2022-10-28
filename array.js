// array data structure
class array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getData(index) {
    return this.data[index];
  }
  pushData(item) {
    this.data[this.length] = item;
    this.length++;
  }
  popData() {
    this.length--;
    let lastItem = this.data[this.length];
    delete this.data[this.length];
    return lastItem;
  }
  deleteData(index) {
    let delItem = this.data[index];
    this.shiftItems(index);
    return delItem;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[index] = this.data[index + 1];
    }
    this.popData();
  }
}
const myArr = new array();
myArr.pushData("hello");
myArr.pushData("akhlaq");
myArr.pushData("armaan");
myArr.pushData("armaan");
myArr.deleteData(0);
console.log(myArr.data);
