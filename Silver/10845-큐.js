// const fs = require("fs");
// const input = fs
//   .readFileSync("../text.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.trim());

// let queue = [];
// let result = "";
// input.shift();
// for (let i = 0; i < input.length; i++) {
//   if (input[i].split(" ").length === 1) {
//     if (input[i] == "front") {
//       if (queue.length == 0) {
//         result += "-1\n";
//       } else {
//         result += queue[0] + "\n";
//       }
//     } else if (input[i] == "back") {
//       if (queue.length == 0) {
//         result += "-1\n";
//       } else {
//         result += queue[queue.length - 1] + "\n";
//       }
//     } else if (input[i] == "empty") {
//       if (queue.length == 0) {
//         result += "1\n";
//       } else {
//         result += "0\n";
//       }
//     } else if (input[i] == "size") {
//       result += queue.length + "\n";
//     }

//     if (input[i] == "pop") {
//       if (queue.length == 0) {
//         result += "-1\n";
//       } else {
//         result += queue.shift() + "\n";
//       }
//     }
//   } else {
//     queue.push(Number(input[i].split(" ")[1]));
//   }
// }
// console.log(result.trim());

const fs = require("fs");
const input = fs
  .readFileSync("../text.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.trim());

input.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  pop() {
    if (Queue.size == 0) {
      return -1;
    } else {
      const popItem = this.head.value;
      this.head = this.head.next;
      this.size -= 1;
      return popItem;
    }
  }

  size() {
    return this.size;
  }

  empty() {
    if (this.size == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.size == 0) {
      return -1;
    } else {
      return this.head.value;
    }
  }

  back() {
    if (this.size == 0) {
      return -1;
    } else {
      return this.tail.value;
    }
  }
}

let q = new Queue();
let answer = [];
for (let i = 0; i <= input.length; i++) {
  const command = input[i];
  switch (command) {
    case "front":
      answer.push(q.front());
      break;
    case "back":
      answer.push(q.back());
      break;
    case "size":
      answer.push(q.size());
      break;
    case "empty":
      answer.push(q.empty());
      break;
    case "pop":
      answer.push(q.pop());
      break;
    default:
      const [_, value] = command.split(" ");
      q.push(+value);
      break;
  }
}

console.log(answer.join("\n"));
