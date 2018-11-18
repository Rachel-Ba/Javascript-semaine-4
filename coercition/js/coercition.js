// pareil(2, 3); // le type est le même
// pareil(2,"2"); // le type est différent

function pareil(x,y) 
{
	if((typeof x) === (typeof y))

  {
    return console.log('Le type est le même');
  }
  else
  {
  	return console.log('Le type est différent');
  }
}

pareil(2, 3);
pareil(2,"2");