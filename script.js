function rockOff(alicesScores, bobsScores) {
  // Initialize variables to track the total scores
  let aliceTotal = 0;
  let bobTotal = 0;

  // Compare scores in each category and award points accordingly
  for (let i = 0; i < 3; i++) {
    if (alicesScores[i] > bobsScores[i]) {
      aliceTotal++;
    } else if (alicesScores[i] < bobsScores[i]) {
      bobTotal++;
    }
  }

  // Construct the result string based on the total scores
  let result = `${aliceTotal}, ${bobTotal}: `;
  if (aliceTotal > bobTotal) {
    result += 'Alice made "Kurt" proud!';
  } else if (aliceTotal < bobTotal) {
    result += 'Bob made "Jeff" proud!';
  } else {
    result += 'that looks like a "draw"! Rock on!';
  }

  return result;
}

// Test case
console.log(rockOff([20, 32, 18], [48, 25, 40])); // Output: '0, 2: Bob made "Jeff" proud!'
