
function calculateMinCost() {
  //your code here
  let value = document.getElementById('rope-lengths').value.split(',');
	let convertedVal = value.map(Number);

	convertedVal.sort((a, b)=> a - b);

	let totalCost = 0;

	while (convertedVal.length > 1) {
        		let a = convertedVal.shift();
		let b = convertedVal.shift();

		totalCost += a + b;

		convertedVal.push(a + b);
		convertedVal.sort((a, b)=> a - b);
	}
	document.getElementById('result').innerHTML = totalCost;
}  
