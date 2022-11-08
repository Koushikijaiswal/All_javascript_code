
	// let bit = 8;

	// function min(x,y)
	// {
	// 	return y + ((x - y) & ((x - y) >> (32 * bit - 1)))
	// }

	function smallest(x,y,z)
	{
		return Math.min(x, Math.min(y, z));
	}

	let x = 12, y = 44, z = 222;
	
	console.log("Smallest of 3 numbers is " +" "+ smallest(x, y, z));
