

// algos.js
// Free Code Camp Algorithm Challenges - lianagitsit


/* SUM ALL ODD FIBONACCI NUMBERS: Given a positive integer num, return the sum 
of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  
  var arr = [1, 1];
  var i = 0;
  var j = 1;
  var sum = 0;
  
  while (sum <= num){
    sum = arr[i] + arr[j];
    if (sum <= num){
      arr.push(sum);
      i++;
      j++;
    }
  }
  
  sum = 0;
  
  for (var k = 0; k < arr.length; k++){
    if (arr[k] % 2 === 1){
      sum += arr[k];
    }
  }
    
  return sum;
}

sumFibs(10);



/* SPINAL TAP CASE: Convert a string to spinal case

function spinalCase(str) {
  
  function capsNoSpaceReplacer(match, offset, str){
    return "-" + match.toLowerCase();
  }
  
  function capsReplacer(match, offset, str){
    return match.toLowerCase();
  }
  
  // Replace spaces and underscores
  str = str.replace(/\s|_/g, "-");
  
  // Replace capital letters where there are no spaces
  str = str.replace(/\B[A-Z]/g, capsNoSpaceReplacer);
  
  // Replaces capital letters where there are spaces
  str = str.replace(/[A-Z]\B/g, capsReplacer);
  
  return str;
}

spinalCase("This Is Spinal Tap");


/* CONVERT HTML ENTITIES: convert characters ", ', &, <, > to their corresponding 
HTML entities

function convertHTML(str) {
  var final;
  
  final = str.replace(/&/g, "&amp;");
  final = final.replace(/</g, "&lt;");
  final = final.replace(/>/g, "&gt;");
  final = final.replace(/"/g, "&quot;");
  final = final.replace(/'/g, "&apos;");

  return final;
}

convertHTML("Hamburgers < Pizza < Tacos");


/* SEARCH AND REPLACE: perform a search on a string (arg[0]) for a given word
(arg[1]) and replace it with a new word (arg[1]). Preserve the case of the 
original word in the replacement.


function myReplace(str, before, after) {
  var final, afterCapitalized;
	var splitStr = [];
	
	splitStr = str.split(" ");
  
  if (before.charAt(0) === before.charAt(0).toUpperCase()){
		afterCapitalized = after.charAt(0).toUpperCase() + after.substring(1);
		splitStr[splitStr.indexOf(before)] = afterCapitalized;
  } else {
		splitStr[splitStr.indexOf(before)] = after;
	}
  
  final = splitStr.join(" ");
  
  return final;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


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
