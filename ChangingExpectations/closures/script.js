// clear the screen for testing
var body = document.getElementsByTagName("BODY")[0];
console.log(body);
body.innerHTML = '';
body.style.background="white";

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    /*
     This method of wrapping an anonymous function in parentheses and calling
     it right away is called an IIFE (Immediately-Invoked Function Expression,
     pronounced like "iffy"). This is where the "magical" part happens.
    */

    /*
    A closure is an inner function that has access to the outer (enclosing)
    function's variables—scope chain. The closure has three scope chains:
    it has access to its own scope (variables defined between its curly brackets),
    it has access to the outer function's variables, and it has access to the
    global variables.

    A closure is a function having access to the parent scope, even after
    the parent function has closed.
    */
    elem.addEventListener('click', (function(numCopy) {
      return function() {
          alert(numCopy)
      };
    })(num));

    // finally, let's add this element to the document
    document.body.appendChild(elem);
};
