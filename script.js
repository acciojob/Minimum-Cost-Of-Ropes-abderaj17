function calculateMinCost() {
  let value = document.getElementById('rope-lengths').value.split(',');
  let minHeap = new MinHeap();

  // Convert input into numbers and add to the min heap
  value.map(Number).forEach(num => minHeap.push(num));

  let totalCost = 0

  while (minHeap.size() > 1) {
    let a = minHeap.pop();
    let b = minHeap.pop();
    
    let cost = a + b;
    totalCost += cost;

    minHeap.push(cost);
  }

  document.getElementById('result').innerHTML = totalCost;
}
