

// algos.js
// Free Code Camp Algorithm Challenges - lianagitsit


/* NO REPEATS PLEASE: Return the number of total permutations of the provided string that don't 
have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// This is an ABSURD solution to this problem - I'm actually surprised it worked, given the space and runtime
// it would take for, say, a 12-character string. But I wanted to be a cowboy, so here we are.

function permAlone(str) {
  var indexPermsArr = [];
  var charPermsArr = [];
  var count = 0;
  
  function factorial(num) {    
    if (num < 0) {  
        return -1;  
    }   
    else if (num == 0) {  
        return 1;  
    }    
    else {  
        return (num * factorial(num - 1));  
    }  
  } 
  
  // generate a single permutation of the provided string
  function makeAperm(){
    var characterPerm = "";
    var indexPerm = "";
    var usedIndexes = []; 
    var i;
    
    for (var j = 0; j < str.length; j++){
      // continue generating a random number 
      do {
        i = Math.floor(Math.random() * str.length);
       // until you get one that hasn't been used
       } while (usedIndexes.indexOf(i) !== -1);
      
      usedIndexes.push(i);       // push index to used bin
      indexPerm += i.toString(); // add index to string
      characterPerm += str.charAt(i);      // build actual string
      
    } // end of perm loop
   
    // run this function until it generates a unique perm
    if (indexPermsArr.indexOf(indexPerm) === -1){
      indexPermsArr.push(indexPerm);
      charPermsArr.push(characterPerm);
      //return charPermsArr;
    } else {
      return makeAperm();
    }
  }
  
  // generate all possible permutations of str
  for (var k = 0; k < factorial(str.length); k++){
    makeAperm();
  }
  
  // check perms for consecutive letters
  for (var m = 0; m < charPermsArr.length; m++){
    for (var n = 0; n < charPermsArr[m].length; n++){
      if (n === charPermsArr[m].length - 1){
        count++;
      } else if (charPermsArr[m].charAt(n) === charPermsArr[m].charAt(n + 1)) {
        n = charPermsArr[m].length;
      }  
    }
  }
  
  
  return count;
}

permAlone('aab');


/* ARGUMENTS OPTIONAL: sum two arguments; if only one is provided, return a function
that expects one argument and returns the sum

function addTogether(x, y) {

if (arguments.length === 1 && typeof x === "number"){
      return function(y){
        if (typeof y !== "number"){
          return undefined;
        } else {
          return x + y;
        }
      };
  
  } else if (typeof x !== "number" || typeof y !== "number"){
      return undefined;
    
  } else {
      return x + y;
  }
  
  var sumTwoAnd = addTogether(x);
  
}

addTogether(2)(3);



/* EVERYTHING BE TRUE: check if the second argument is truthy on all elements of a collection

function truthCheck(collection, pre) {
  
  for (var i = 0; i < collection.length; i++){
    if (!collection[i][pre]){
      return false;
    }
  }
  
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


/* BINARY AGENTS: Return a translated sentence from the passed binary string.

function binaryAgent(str) {
  var myArray = str.split(" ");
  var strArray = [];
  var final;
  
  for (var i = 0; i < myArray.length; i++){
    strArray.push(String.fromCharCode(parseInt(myArray[i], 2)));
  }
  
  final = strArray.join("");
  
  return final;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



/*STEAMROLLER: Flatten an array of indeterminate levels of nesting

function steamrollArray(arr) {
  var final = [];
  
  function steamrolled(item){
    var j = 0;
    
    if (!Array.isArray(item)){
      final.push(item);
      return final;
    } 
    
    while (j < item.length){
      if (!Array.isArray(item[j])){
        final.push(item[j]);
        j++;
      } else {
        return steamrolled(item[j]);
      }
    }
    
  }
  
  for (var i = 0; i < arr.length; i++){
    steamrolled(arr[i]);
  }

  return final;
}


steamrollArray([1, [2], [3, [[4]]]]);


/* DROP IT: Drop the elements from the front of an array until the function in the 
second argument returns true.

function dropElements(arr, func) {
  
  var i = 0;
  while (!func(arr[i])){
    arr.shift();
  }

  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });



/* FINDERS KEEPERS: looks through an array (first argument) and returns the first element 
in the array that passes a truth test (second argument).

function findElement(arr, func) {
  var num;
  
  num = arr.filter(func)[0];
  
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });



/* SMALLEST COMMON MULTIPLE: find the LCM of two numbers that is also evenly divisible by all 
numbers between them.

function smallestCommons(arr) {
  
  var foundLCM = false;
  var count = 1;
  var multiple;
  
  // find the larger number
  var larger = arr[0];
  var smaller = arr[1];
  if (smaller > larger){
    larger = arr[1];
    smaller = arr[0];
  }
    
  // start finding multiples of the larger number
  while (!foundLCM){
    multiple = larger * count;
    
    // at each multiple, check if it is divisible by the other number
    if (multiple % smaller === 0){
        // if it is, loop through the intermediary numbers and check 
        // for even divisibility for each
        for (var i = smaller + 1; i < larger; i++){
          if (multiple % i > 0){
            i = larger;
          } else if (i === larger - 1 && multiple % i === 0){
            foundLCM = true;
          }
        }
    } 
    count++;
  }
  
  return multiple;
}

smallestCommons([23, 18]);


/* SUM ALL PRIMES: find the sum of all prime numbers preceding a given number

function sumPrimes(num) {
  // All even numbers > 2 are out because they are 
  // divisible by 1, themselves, and 2
  
  var sum = 2;
  var possiblePrime;
  var flooredSquareRoot;
 
  
  for (possiblePrime = 3; possiblePrime <= num; possiblePrime += 2){
    // find sqrt of possiblePrime
    flooredSquareRoot = Math.floor(Math.sqrt(possiblePrime));
    
    // test numbers (x) up to sqrt(possiblePrime):
    for (var testNumber = 1; testNumber <= flooredSquareRoot; testNumber++){

      // if possiblePrime % x === 0, possiblePrime is composite
      if (possiblePrime % testNumber === 0 && testNumber > 1){
        
        // kick out of testing possiblePrime
        testNumber = flooredSquareRoot + 1;
      }
      
      // if no testNumbers suggest possiblePrime is composite, add it to sum
      if (testNumber === flooredSquareRoot){
        sum += possiblePrime;
      }
    }
  }
  
  
  return sum;
}

sumPrimes(10);



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
