'use strict';

function BinaryTree(val){
  this.value = val;
  this.left;
  this.right;
}

// BinaryTree.prototype.insertValue = function(val) {
//   if (val < this.value){
//     if (! this.left){
//       this.left = new BinaryTree(val);
//       return;
//     }
//     if (val < this.left.value){
//       if (! this.left.left){
//         this.left.left = new BinaryTree(val);
//         return;
//       }
//     }
//   }
//   if (val > this.value){
//     if (! this.right){
//       this.right = new BinaryTree(val);
//       return;
//     }
//     if (val > this.right.value){
//       if (! this.right.right){
//         this.right.right = new BinaryTree(val);
//         return;
//       }
//     }
//   }
// };

BinaryTree.prototype.insertValue = function(val) {
  var binaryObject = this;
  var branch;
  var traverse = true;
  while (traverse){
    //if the value exist leave the function
    if (val === binaryObject.value){
      traverse = false;
      return;
    }
    //set the branch to right, change it to left if is less than the value
    branch = 'right';
    if (val < binaryObject.value){
      branch = 'left';
    }
    //if the branch does not exist, create it with that value
    if (! binaryObject[branch]){
      binaryObject[branch] = new BinaryTree(val);
      traverse = false;
      return;
    }
    //if the branch exists set it as the next branch to search
    binaryObject = binaryObject[branch];
  }
};


var num = 157;
var binary_tree = new BinaryTree(num);

binary_tree.insertValue(23);
binary_tree.insertValue(298);
binary_tree.insertValue(11);
binary_tree.insertValue(333);

console.log(binary_tree);
