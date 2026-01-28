function getSecondLargest(nums) {
    // Complete the function
     let uniqueNums = Array.from(new Set(nums));
      uniqueNums.sort((a, b) => b - a);
      return uniqueNums[1];

}
getSecondLargest(2,6,6,8);