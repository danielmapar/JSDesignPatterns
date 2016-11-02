var funcs = [];
// Var i is not limited to the scope of the for loop
// The for loop does not create a scope here
for (var i = 0; i < 3; i++) {          // let's create 3 functions
	var novo = 10; // you can access novo from the outsitde of the loop
    funcs[i] = function() {            // and store them in funcs
        console.log("My value: " + i); // each should log its value.
    };

    /*
    Immediately-Invoked Function Expression
    Better solution
	funcs[i] = (function(newI) {            // and store them in funcs
    	return function() {
    		console.log("My value: " + newI);
    	}
    })(i);
    */

}
for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}

console.log("Value of novo: ", novo);
console.log("Value of i: ", i);