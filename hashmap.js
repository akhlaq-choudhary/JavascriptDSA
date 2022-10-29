class HashMap {
  constructor(size) {
    this.data = new Array(size);
  }
  // private method hash
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < String(key).length; i++) {
      hash = (hash + String(key).charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    //creating space if empty address
    if (!this.data[address]) {
      this.data[address] = [];
    }
    //updating if already exist
    if (this.data[address].length) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[address][i][0] === key) {
          this.data[address][i][1] = value;
          return this.data;
        }
      }
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return undefined;
  }
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}
const myHashTable = new HashMap(50);
myHashTable.set("grapes", 1000);
myHashTable.set("grapes", 2000);
myHashTable.set("bannana", 1000);
myHashTable.set("apple", 1000);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
console.log(myHashTable);
