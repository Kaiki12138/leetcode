var twoSum = function(nums, target) {
    //用的哈希表
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }else {
            map.set(nums[i], i)
        }
    }
    return null
}