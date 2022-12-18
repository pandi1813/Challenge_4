// Your task is to write JavaScript code that analyzes the records to calculate each of the following:

// The total number of months included in the dataset.
  // Count up how many things are in the array
  // array.length
  // Need a variable to store the value of array.length

// The net total amount of Profit / Losses over the entire period.
  // Adding up the money
  // Keep a rolling total
  // Need a variable to store the rolling total
  // for loop to iterate over the array
    // Inside that for loop, access position 1 of each array element to get the numbers

// The average of the changes in Profit / Losses over the entire period.
// You will need to track what the total change in profits are from month to month and then find the average.
// (Total / Number of months)

// The greatest increase in profits(date and amount) over the entire period.

// The greatest decrease in losses(date and amount) over the entire period.

  // Total up the differences between each pair of adjoining months & divide by number of array elements
  // for loop starting with i = 1
    // Each iteration, subtract the data at position [1] of the previous element from the data at position [1] of the current element
    // Put that data into a new array variable
      // So, we need to arr.push() each new 'change' value to the new array
    // Need a variable to store greatest amount of change (+)
    // Need a variable to store greatest amount of change (-)
    // Each iteration, compare the difference to the previous difference
    // If it's higher than what's already stored in greatest-profit variable, reassign that variable to equal finances[i]
      // greatest[0] = finances[i][0]
      // greatest[1] = changeArr[i-1]
    // If it's lower than what's already stored in greatest-loss variable, reassign that variable to equal finances[i]

  // Add up the total in the new 'changes' array
    // Need a variable to store the rolling total for this array that's different that the rolling total of profits
    // for loop to iterate over the changes array
      // add each element in turn to the rolling total

  // Take that 'total changes amount' variable and divide it by the number of elements in the array
    // Look up how to limit the answer to two decimal points

// Sample decrementing for loop
for (let i = arr.length - 1; i < 0; i--) {
  
}