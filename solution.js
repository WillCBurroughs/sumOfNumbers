function getSum(a, b)
{
   
  let holdArray = [a,b];
  
  // Sorts array 
  holdArray.sort((a,b) => a - b);
  
  let returnValue = 0;
  
  // Starts at leftmost (smallest value) and goes to right (larger value)
  for(let i = holdArray[0]; i <= holdArray[1]; i++){
    returnValue += i;
    console.log(returnValue);
  }
  
  console.log(holdArray);
  console.log(returnValue);
  
  return returnValue;
  
}
