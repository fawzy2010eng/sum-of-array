function sum(...nums) {
    let total = 0 ;
    for(let num in nums) {
        total += nums[num];
    }
    return total;
}
console.log(typeof(sum([2,2,4])))
