//linked list
class ListNode {
	public value: any;
	public next: any;
	public previous: any;
	public constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}
class LinkedList {
	public head: any;
	public tail: any;
	constructor(data) {
		this.head = new ListNode(data);
		this.tail = new ListNode(data);
		this.tail.previous = this.head;
	}
	addFirst(value: any) {
		var node = new ListNode(value);
		if (this.head.next === null) {
			this.head.next = node;
		} else {
			node.next = this.head.next;
			this.head.next = node;
		}
	}
	addLast(value: any) {
		var node = new ListNode(value);
		if (this.tail.previous === this.head) {
			this.tail.previous = node;
			this.head.next = node;
		} else {
			this.tail.previous.next = node;
			this.tail.previous = node;
		}
	}
	removeFirst() {
		this.head.next.next !== null ? (this.head = this.head.next) : null;
	}
	list() {
		var next = this.head.next;
		console.log(this.head.value);
		while (next !== null) {
			console.log(next.value);
			next = next.next;
		}
	}
}
var linked = new LinkedList('awsomeLinkedList');
linked.addLast('sup');
linked.addLast('yooooo');
linked.addLast('oof');
linked.addFirst('wassap');
linked.addFirst('first value');
linked.list();
linked.removeFirst();
linked.removeFirst();
linked.removeFirst();
linked.removeFirst();
linked.removeFirst();
linked.removeFirst();
console.log('++++++++++++++++++');
linked.list();