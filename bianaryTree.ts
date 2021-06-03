class TreeNode {
	val: number;
	right: TreeNode | null;
	left: TreeNode | null;
	constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val;
		this.right = right ? right : null;
		this.left = left ? left : null;
	}
}
function bfs(TreeNode: TreeNode): number[] {
	var result = [];
	var queue = [TreeNode];
	while (queue.length) {
		var current = queue.shift();
		result.push(current.val);
		current.left && queue.push(current.left) ;
      current.right && queue.push(current.right);
	}
	return result;
}
(function dirver() {
	const tree = new TreeNode(
		1,
		new TreeNode(2, new TreeNode(5), new TreeNode(7)),
		new TreeNode(3, null, new TreeNode(9))
   );
   console.log(bfs(tree))
})();
