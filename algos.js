

// algos.js
// Free Code Camp Algorithm Challenges - lianagitsit

/* SORTED UNION: a function that takes two or more arrays and 
returns a new array of unique values in the order of the original 
provided arrays.

function uniteUnique(arr) {
  
  var results = [];
  
  for (var i = 0; i < arguments.length; i++){
    for (var j = 0; j < arguments[i].length; j++){
      if (results.indexOf(arguments[i][j]) === -1){
        results.push(arguments[i][j]);
      }
    }
  }
  
  return results;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



/* BOO WHO? Check if a value is classified as a boolean primitive.

/* MISSING LETTERS: Find the missing letter in the passed letter range and return it. 
If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  var alphaStr = "abcdefghijklmnopqrstuvwxyz";
  var n = 0;
  
  for (var i = alphaStr.indexOf(str[0]); i < str.length; i++){
    if (str[n] !== alphaStr[i]){
      return alphaStr[i];
    }
    n++;
  }
  return undefined;
}

fearNotLetter("defh");



/* PERCENT ENCODING takes a string and swaps spaces for %20

function percentEncoder(str){
	var result = "";
	var tracker = 0;

	for (var i = 0; i < str.length; i++){
		if (str[i] === " "){
			result += str.substring(tracker, i) + "%20";
			tracker = i + 1;
		}
	}
	result += str.substring(tracker);
	return result;
}

/* DNA pairing version 2: hash map style

function pairElement(str){
	var results = [];

	var basepairs = {
		"G": "C", 
		"C": "G",
	  "A": "T",
		"T": "A"}
		
	for (let i = 0; i < str.length; i++){
		results.push([str[i], basepairs[str[i]]]);
	}

	return results;

}

// DNA PAIRING
// a function that is passed a string of unpaired DNA elements
// take each character, get its pair, and return the results as a second array of arrays

function pairElement(str) {

	var result = [];

	for (var i = 0; i < str.length; i++){

		var subArray = [];

		if (str[i] === "G"){
			subArray.push("G", "C");
		} else if (str[i] === "C"){
			subArray.push("C", "G");
		} else if (str[i] === "A"){
			subArray.push("A", "T");
		} else if (str[i] === "T"){
			subArray.push("T", "A");
		}

		result.push(subArray);
	}

  return result;
}
*/

pairElement("GCG");

/* PIG LATIN


function translatePigLatin(str) {
  
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  if (vowels.indexOf(str[0]) !== -1){
    return str + "way";
  } else {
    for (var i = 1; i < str.length; i++){
      if (vowels.indexOf(str[i]) !== -1){
        return str.substring(i) + str.substring(0, i) + "ay";
      }
    }
  }
  
  return str;
}

translatePigLatin("consonant");


// WHEREFORE ART THOU?

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
