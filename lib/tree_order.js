const {TreeNode} = require('./tree_node.js')
function inOrderArray(root) {
  if (root === null) return [];
  // if (root === undefined) return []

  let leftArr = inOrderArray(root.left)
  let rightArr = inOrderArray(root.right)
  console.log(leftArr, rightArr)

  return [...leftArr, root.val, ...rightArr]
  // if the root is null, return an empty array

  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the root value
  //   concatenated with the right array
}

function postOrderArray(root) {
  // if the root is null, return an empty array

  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the right array
  //   concatenated with the root value
}

let root = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(inOrderArray(root))
// //[ 'd', 'b', 'e', 'a', 'c', 'f' ]


// postOrderArray() {
//   if (root === null) return [];

//   this.postOrderArray(root.left)
//   this.postOrderArray(root.right)
//   this.postOrderArray.push(root.val)
//   console.log(this.postOrderResult)

//   return this.postOrderResult
// }
module.exports = {
  inOrderArray,
  postOrderArray
};
