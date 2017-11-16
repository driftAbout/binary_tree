'use strict';

function BinaryTree(val){
  this.value = val;
  this.left;
  this.right;
}

BinaryTree.prototype.insertValue = function(val) {
  var binaryObject = this;
  var branch;
  var traverse = true;
  var x = 1;

  while (traverse){
    console.log('inset count ', x, ': ', val);
    //if the value exist leave the function
    if (val === binaryObject.value){
      traverse = false;
      return false;
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
      return true;
    }
    //if the branch exists set it as the next branch to search
    binaryObject = binaryObject[branch];
    x++;
  }
};

BinaryTree.prototype.includesValue = function(val) {
  var binaryObject = this;
  var branch;
  var traverse = true;
  var x = 1;

  while (traverse){
    console.log('includes ', x, ': ', val);
    //if the value exist leave the function
    if (val === binaryObject.value){
      traverse = false;
      return true;
    }
    //set the branch to right, change it to left if is less than the value
    branch = 'right';
    if (val < binaryObject.value){
      branch = 'left';
    }
    //if the branch does not exist, you reached the end of the line
    // the value is not in the tree
    if (! binaryObject[branch]){
      traverse = false;
      return false;
    }
    //if the branch exists set it as the next branch to search
    binaryObject = binaryObject[branch];
    x++;
  }
};


function randomTree(min, max) {
  var midPoint = Math.ceil((max - min)/2);
  //var random_tree = new BinaryTree(midPoint);
  var insertCount = 0;
  var inclusive = (max - min) + 1;
  var tree_value;
  var tree_values = [];
  while (insertCount < inclusive) {
    tree_value = Math.floor((Math.random() * inclusive) + min);
    if (!tree_values.includes(tree_value)){
      tree_values.push(tree_value);
      console.log(insertCount, tree_value, 'tree_values.length: ', tree_values.length);
      insertCount++;
    }
  }
  console.log('tree_values: ', tree_values);

}


randomTree(7, 21);

/*
var num = 157;
var binary_tree = new BinaryTree(num);

binary_tree.insertValue(23);
binary_tree.insertValue(298);
binary_tree.insertValue(11);
binary_tree.insertValue(333);

var valueExists = binary_tree.includesValue(11);

console.log(binary_tree);
console.log('valueExists: ', valueExists);
*/
