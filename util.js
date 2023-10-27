function mean(nums) {
    const total = nums.reduce((acc, num) => acc + num, 0);
    return total / nums.length;
}

function median(nums) {
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    if (nums.length % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2;
    }
    return nums[mid];
}

function mode(nums) {
    const freq = {};
    let max = 0;
    let mode;

    nums.forEach(num => {
        if (freq[num]) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }

        if (freq[num] > max) {
            max = freq[num];
            mode = num;
        }
    });

    return mode;
}

module.exports = { mean, median, mode };
