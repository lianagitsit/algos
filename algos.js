// algos.js
// Free Code Camp Algorithm Challenges - lianagitsit



/* WHEREFORE ART THOU?

function whatIsInAName(collection, source) {
	// What's in a name?
	var arr = [];
	// Only change code below this line

	var match;

	// loop through objects in collections array
	for (var i = 0; i < collection.length; i++) {

		// loop through source object
		for (var prop in source) {

			// does this collections object have this property of my source object?
			if (collection[i].hasOwnProperty(prop)) {
				// does this property have the same value in both the source object and the array object?
				if (collection[i][prop] === source[prop]) {
					// it's a match!
					match = true;
					// go onto next source prop-value pair
				} else {
					// move to next collection object
					match = false;
					break;
				}
			} else {
				match = false;
				break;
			}
		}
		
		// if loop through source object is complete, push this object to results array
		if (match === true){
			arr.push(collection[i]);			
		}
	}


	// Only change code above this line
	return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
*/
