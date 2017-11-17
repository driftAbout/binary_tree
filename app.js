'use strict';

function BinaryTree(val){
  this.value = val;
  this.left;
  this.right;
  //this.length = 1;
}

BinaryTree.prototype.insertValue = function(val) {
  var binaryObject = this;
  var branch;
  var traverse = true;
  var x = 1;

  while (traverse){
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
      //this.length++;
    //  console.log('insert count ', x, ': ', val);
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
    //if the value exist leave the function
    if (val === binaryObject.value){
      console.log('includes ', x, ': ', val);
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


BinaryTree.prototype.removeValue = function(val) {
  var binaryObject = this;
  var parentBranch;
  var branch = 'right';
  var otherBranch = 'right';
  var traverse = true;

  while (traverse){
    // //change the branch to left if is less than the value
    // branch = 'right';
    // if (val < binaryObject.value){
    //   branch = 'left';
    // }

    // branch = 'right';
    // if (val < parentBranch.value){
    //   branch = 'left';
    // }


    //if the value exists then you found the branch to modify
    if (val === binaryObject.value){
      console.log('found: ', val);
      if (branch === 'right') otherBranch = 'left';
      //if the branch does not have any sub-branches then just remove the branch
      if (! binaryObject[branch] && ! binaryObject[otherBranch]){
        console.log('No children');
        delete parentBranch[branch];
        traverse = false;
        return;
      }
      //if the branch only has one sub-branch, just move the sub-branch up
      if (! binaryObject[branch] || ! binaryObject[otherBranch]) {
        if (! binaryObject[branch]) branch = otherBranch;
        console.log('Only ', branch, ' branch');
        binaryObject.value = binaryObject[branch].value;
        binaryObject[branch] = binaryObject[branch][branch];
        traverse = false;
        return;
      }

      //set the value of the current branch to the value of the sub-branch on the same side
      binaryObject.value = binaryObject[branch].value;
      //console.log('binaryObject.value: ', binaryObject.value );
      //capture the value of the other subBranch
      var otherBranchObject = binaryObject[otherBranch];
      //delete the other branch, it will get appended tot he other side at the end

      delete binaryObject[otherBranch];
      //reset the values of the current branches sub-branches as the sub-brances of the sub-branch from the same side
      //move each sub-branch to the parent branch
      var subBranch = binaryObject[branch][otherBranch];
      console.log('subBranch: ', subBranch);
      binaryObject[branch] = binaryObject[branch][branch];

      //move the oposite sub-branch if it exists
      if(subBranch){
        console.log('added sub-branch');
        binaryObject[otherBranch] = subBranch;
      }
      //if there isn't another branch then there is nothing to move
      if (! otherBranchObject) {
        traverse = false;
        return;
      }

      //find the end of the sub-branch of the sub-branch from the same side
      var treeContinues = true;
      //var binaryObjectTarget = binaryObject[otherBranch];
      var binaryObjectTarget = binaryObject[otherBranch];
      //if found end of the line, append sub-branch
      if (! binaryObjectTarget){
        binaryObject[otherBranch] = otherBranchObject;
        traverse = false;
        return;
      }
      while(treeContinues){
        //if the sub-branch does not exist you found the end
        if(! binaryObjectTarget[otherBranch]){
          //insert the sub-branch from the opposite side of the original removed branch
          binaryObjectTarget[otherBranch] = otherBranchObject;
          //console.log('found');
          treeContinues = false;
          return;
        };
        binaryObjectTarget = binaryObjectTarget[otherBranch];
      }

      //traverse = false;
      //return true;
    }

    //if the branch does not exist, then this value does not exist in the tree

    //change the branch to left if is less than the value
    branch = 'right';
    if (val < binaryObject.value){
      branch = 'left';
    }

    if (! binaryObject[branch]){
      console.log('Value does not exist');
      traverse = false;
      return false;
    }

    //if the value was not found, set the next branch to search in the loop
    parentBranch = binaryObject;
    binaryObject = binaryObject[branch];
  }
};


function randomTree(min, max) {
  var midPoint = Math.ceil((max - min)/2) + min;
  var random_tree = new BinaryTree(midPoint);
  //insertCount starts at 1 because a value was added for the midpoint
  var insertCount = 1;
  var inclusive = (max - min) + 1;
  //console.log('inclusive: ', inclusive);
  var tree_value;
  while (insertCount < inclusive) {
    tree_value = Math.floor((Math.random() * inclusive) + min);
    var unique = random_tree.insertValue(tree_value);
    if (unique){
    //  console.log(insertCount, tree_value, 'Added: ', unique);
      insertCount++;
    }
  }
  //console.log('random_tree_length: ', random_tree.length);
  //console.log('random_tree: ', random_tree);

  return random_tree;

}

function sortedTree(min, max) {
  var midPoint = Math.ceil((max - min)/2) + min;
  var sorted_tree = new BinaryTree(midPoint);

  for (var i = min; i <= max; i++){
    sorted_tree.insertValue(i);
  }
  console.log('sorted_tree_length: ', sorted_tree.length);
  console.log('sorted_tree: ', sorted_tree);

  return sorted_tree;
}

//var binary_tree = sortedTree(1, 10);
var binary_tree = randomTree(1, 100);

console.log(JSON.stringify(binary_tree));
console.log(binary_tree);
var valueExists = binary_tree.includesValue(11);

binary_tree.removeValue(28);

console.log(JSON.stringify(binary_tree));
console.log(binary_tree);
console.log('valueExists: ', valueExists);

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
