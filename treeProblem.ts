class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
function deepestLeavesSum(root: TreeNode | null): number {
	
}
//driver
(() => {
	const tree = new TreeNode(
		1,
		new TreeNode(2, new TreeNode(5), new TreeNode(7)),
		new TreeNode(3, null, new TreeNode(9))
	);
	const result =deepestLeavesSum(tree);
   console.log(result)
})();
