//maxEtMin("1 2 3 4 5"); // return "5 1"
//maxEtMin("1 2 -3 4 5"); // return "5 -3"
//maxEtMin("1 9 3 4 -5"); // return "9 -5"


var array = [];

function maxEtMin(liste) 
{
	  console.log(liste)
	  var test = liste.split(" ").join('');
	  var arrayNumbers = test.split("");

	  var biggest = arrayNumbers.sort((a, b) => a < b);
	  var len = biggest.length;
	  var lastPos = len-1;
	  console.log(biggest[0], biggest[lastPos]);
}

maxEtMin("1 2 3 4 5");