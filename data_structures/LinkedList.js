// the first Node = Head;
// the last Node = Tail;
// the total number of Nodes = size

const linkedTail = new LinkedList();
linkedTail.add("first");
linkedTail.add("second");
linkedTail.add("third");
linkedTail.add("fourth");

class Node {

    value: String;
    next: Node;

    constructor(){
        this.value = value;
        this.next = Node;
    }

    setNext(node) {
        this.next = node;
    }
}

class LinkedList {

    head: Node;
    tail: Node;
    size: Number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        const newTail = new Node(value);
        if(this.size === 0){
            this.head = newTail;
            this.tail = newTail;
        } else {
            const oldTail = this.tail;
            oldTail.next = newTail;



            const oldTail = this.tail;
            oldTail.setNext(newTail);
            this.tail = newTail;
        }
        this.size ++;
    }

    includes() {

    }

    removeFirst() {

    }

    getFirst() {

    }

    getLast() {

    }

    size() {

    }

    clear() {

    }

}