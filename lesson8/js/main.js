document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById('lottbutton').addEventListener("click",init);

  document.getElementById('newbutton').addEventListener("click",clear);



});


function init () {
	var i, rand, temp, str, nums = [];



	for (i=1; i<50; i++)
	{
		nums[i] = i;
	}

	for (i=1; i<50; i++)
	{
		rand = Math.floor(Math.random()*49);
		temp = nums [i];
		nums[i] = nums[rand];
		nums[rand] = temp;
	}


	
		str = [];

	for (i = 1; i<7; i++)
	{
		str = nums[i];
		var newdiv = document.createElement('div');
			newdiv.innerHTML = str;
			document.getElementById( "panel").appendChild(newdiv);

	}

	}
	

function clear() {
        var myNode = document.getElementById("panel");
		var fc = myNode.firstChild;

		while( fc ) {
		    myNode.removeChild( fc );
		    fc = myNode.firstChild;
		}
     }






