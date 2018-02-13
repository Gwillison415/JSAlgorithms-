/*branching possible paths
go down an entire path to find the exit
  if this path isn't the solution path
  traverse back to the branch of the path and
    go down the next branch of that path to find out if this is the exit path

i can visuallize this as a tree, i've got a data struct = tree
binary search method
depth first search
create a fn that searchs down a node list of children
consistently but arbitrarily choosing 1 side at all times  to check if isExit
i am choosing left side always
  have a way to check for if node is an exit  => func

class that defined nodes representing a maze -- > serach tree
class biSearchTree {
  constructor(root) {

  }
  if (!root) {
    make New Node --> root
  } else {
    current
  }
}
class defines a node 1 root 2 left 3 a right 4 if it's been visited
    anything visited 3 times is definitely NOT the path


  class Node {
    constructor(data, left, right) {
      this.data = data,
      this.visited = 0,
      this.left = left,
      this.right = right,

    }
  }


need a binary serach algo to traverse the tree
need base case --> isExit(node) => true if data speicifies "Exit Node"
 i need a stack to push the node path along
   i then pop of the path to see if there's another leaf so that I can traverse that potentially
stack needs to traverse back to the last visited node with a right side option to traverse - given i'm choosing to take all left paths first.

 fn bfs( node, isExit, path)
  path.push(node)
  BC  - given a node if its an exit return the entire path out of maze
      return tuple (true, [path list])
    BC -->  if (isExit(node)) {
      return (true, path)
    }
  if (node.left)  - > has leaves - follow that
  if (node.right) -->

  if not left or right  -- > return false

  */
  function dfs (node, isExit, path = []) {

    if (isExit(node.data, path)) {
      return (true, path);
    }
    if (!node) {
    let lastNode = path.pop();
    return dfs(lastNode, isExit, path)
      return (false, path);
    }
    if (node.left && node.left.visited < 2) {
      if (node.left.visited === 1) {
        return dfs()
      }
      path.push(node)
      node.left.visited += 1
      return dfs(node.left, isExit, path)
    }
    if (node.right && node.right.visited < 2) {
      path.push(node)
      node.right.visited += 1
      return dfs(node.right, isExit, path)
    }
    return (false, path);
  }

  isExit(node, path) {
    if (node.data === "Exit") {
      return true;
    }
    return false;
  }
