
function calculateMinCost() {
  //your code here
  let value = document.getElementById('rope-lengths').value.split(',');
	let convertedVal = value.map(Number);

	convertedVal.sort((a, b)=> a - b);

	let totalCost = 0;
}  
