class Stack {

    constructor(){
        // attributes

        // which we store the value
        this.data = [];
        // Points to the position where the new element is to be inserted = the top empty location
        this.top = 0;
    }

    // insert an element to the Top of Stack
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    // Returns the length of the Stack
    length () {
        return this.top;
    }
    
    // Get the Top Element of the Stack
    peek() {
        return this.data[this.top-1];
    }

    // check if the stack is empty
    isEmpty() {
        return this.top === 0;
    }

    // delete an element at the Top of the Stack
    pop() {
        if(this.isEmpty() === false) {
            this.pop = this.top - 1;
            // removes the last element;
            return this.data.pop();
        }
    }

    // print the elements of the Stack
    print(){
        let top = this.top - 1;
        while(top >= 0) {
            console.log(this.data[top]);
            top--;
        }
    }

    // reverse the stack
    reverse() {
        this._reverse(this.top - 1);
        // console.log(this.data);
    }

    _reverse(index){
        if(index != 0){
            this._reverse(index - 1);
        }
        console.log(this.data[index]);
    }
}


const test = new Stack();
test.push("hello");
test.push("monkey");
test.push("world");
// test.reverse();
console.log(test.print());
console.log(test.pop());




