//findUniqNumber([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniqNumber([ 0, 0, 0.55, 0, 0 ]) === 0.55    
//findUniqNumber([ 1, 3, 1, 2, 3, 1 ]) === 2

function findUniqNumber(tableau)
{
  return tableau.filter(function(nbrUnique)
  {
    return tableau.indexOf(nbrUnique) === tableau.lastIndexOf(nbrUnique);
  })

  [0] || -1;

}

console.log(findUniqNumber([ 1, 3, 1, 2, 3, 1 ]));
