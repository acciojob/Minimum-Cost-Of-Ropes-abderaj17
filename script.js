function calculateMinCost() {
  //your code here
  let value = document.getElementById('rope-lengths').value.split(',');
  let convertedVal = value.map(Number);

  // Sort the array only once at the beginning
  convertedVal.sort((a, b) => a - b);

  let totalCost = 0;

  while (convertedVal.length > 1) {
    // Instead of using shift, find and remove the smallest element
    let a = findAndRemoveSmallest(convertedVal);
    let b = findAndRemoveSmallest(convertedVal);

    totalCost += a + b;

    convertedVal.push(a + b);
    // No need to sort the array here
  }

  document.getElementById('result').innerHTML = totalCost;
}
