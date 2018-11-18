//findUniqString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
//findUniqString([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

function cleanArray(array)
{

	//for (var i = 0; i < array.length; i++)
	//{

var légumes = array;
var autresLégumes = ['céleri', 'radis'];

Array.prototype.push.apply(légumes, autresLégumes);


	//}

console.log(légumes);

}

cleanArray([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]);
