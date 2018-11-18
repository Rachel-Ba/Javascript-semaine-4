//getMiddle("test") renvoie "es"
//getMiddle("testing") renvoie "t"
//getMiddle("middle") renvoie "dd"
//getMiddle("A") renvoie "A"

function getMiddle(input_text) 
{
	var longueur = input_text.length;

	if (longueur%2 === 0)
	{
		var milieu = longueur/2;
		var res_pair1 = input_text.substring((milieu-1), milieu);
		var res_pair2 = input_text.substring(milieu, (milieu + 1));
		var res_pair = res_pair1 + res_pair2;
		return console.log(res_pair);

	}
	else (longueur%2 !== 0)
	{
		var milieu = longueur/2;
		var res_impair = input_text.substring(milieu, (milieu + 1));
    	return console.log(res_impair);

	}


}

getMiddle("middle");