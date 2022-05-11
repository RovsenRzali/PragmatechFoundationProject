
nums = [13, 11,2, 7];
let target = 9;

function compareTriplets(nums) {
  let outPut = []

  for (let i = 0; i<=nums.length; i++){
    for (let j = 1; j<=nums.length; j++){

    if(nums[i] + nums[j] == target) {
      outPut.push(i,j)
    }
  }
  }
     return outPut
  }

  console.log (compareTriplets(nums))
