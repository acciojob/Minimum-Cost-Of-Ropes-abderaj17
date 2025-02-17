function calculateMinCost() {
  let value = document.getElementById('rope-lengths').value.split(',');
  let minHeap = value.map(Number);

  // Convert array into a Min Heap
  minHeap.sort((a, b) => a - b); // Initial sorting

  let totalCost = 0;

  while (minHeap.length > 1) {
    // Always remove the two smallest elements
    let a = minHeap.shift();
    let b = minHeap.shift();
    
    let cost = a + b;
    totalCost += cost;

    // Insert back into heap and maintain sorting
    minHeap.push(cost);
    minHeap.sort((a, b) => a - b); // Maintain heap order
  }

  document.getElementById('result').innerHTML = totalCost;
}
