const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push_front(value) {
    const node = new Node(value);
    if (this.size() == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
  }

  push_back(value) {
    const node = new Node(value);
    if (this.size() == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
  }

  pop_front() {
    if (this.size() == 0) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    if (this.size() == 1) {
      this.head = null;
    } else {
      this.head.prev = null;
    }
    this.length -= 1;
    return popItem.value;
  }

  pop_back() {
    if (this.size() == 0) return -1;
    const popItem = this.tail;
    this.tail = this.tail.prev;
    if (this.size() == 1) {
      this.tail = null;
    } else {
      this.tail.next = null;
    }
    this.length -= 1;
    return popItem.value;
  }

  size() {
    return this.length;
  }

  empty() {
    if (this.length == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.empty() == 1) return -1;
    return this.head.value;
  }

  back() {
    if (this.empty() == 1) return -1;
    return this.tail.value;
  }
}

let answer = [];
let deque = new Deque();
const command = arr.map((v) => v.split(" "));
command.forEach((v) => {
  switch (v[0]) {
    case "push_front":
      deque.push_front(v[1]);
      break;
    case "push_back":
      deque.push_back(v[1]);
      break;
    case "pop_front":
      answer.push(deque.pop_front());
      break;
    case "pop_back":
      answer.push(deque.pop_back());
      break;
    case "size":
      answer.push(deque.size());
      break;
    case "empty":
      answer.push(deque.empty());
      break;
    case "front":
      answer.push(deque.front());
      break;
    case "back":
      answer.push(deque.back());
      break;
  }
});

console.log(answer.join("\n"));
