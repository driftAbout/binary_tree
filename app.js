'use strict';

function BinaryTree(val){
  this.value = val;
  this.left;
  this.right;
}

BinaryTree.prototype.insertValue = function(val) {
  if (val < this.value){
    if (! this.left){
      this.left = new BinaryTree(val);
      return;
    }
    if (val < this.left.value){
      if (! this.left.left){
        this.left.left = new BinaryTree(val);
        return;
      }
    }
  }
  if (val > this.value){
    if (! this.right){
      this.right = new BinaryTree(val);
      return;
    }
    if (val > this.right.value){
      if (! this.right.right){
        this.right.right = new BinaryTree(val);
        return;
      }
    }
  }
};

var num = 157;
var binary_tree = new BinaryTree(num);

binary_tree.insertValue(23);
binary_tree.insertValue(298);
binary_tree.insertValue(11);
binary_tree.insertValue(333);

console.log(binary_tree);
