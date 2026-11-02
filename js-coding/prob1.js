function findSmallestNonRepresentable(arr) {
    const nums = [...new Set(arr)].filter(n => n > 0).sort((a, b) => a - b); // Remove duplicates & sort

    const maxSum = nums.reduce((a, b) => a + b, 0); // Maximum possible sum using all numbers
    const possibleSums = new Set();

    // Generate all possible sums of 2 or more numbers
    const generateSums = (start, sum, count) => {
        if (count >= 2) {
            possibleSums.add(sum);
        }
        for (let i = start; i < nums.length; i++) {
            generateSums(i + 1, sum + nums[i], count + 1);
        }
    };

    generateSums(0, 0, 0);

    let n = 1;
    while (true) {
        if (!nums.includes(n) && !possibleSums.has(n)) {
            return n;
        }
        n++;
        if (n > maxSum + 1) break; // Smallest non-representable must be within range
    }

    return maxSum + 1;
}

// Example usage
console.log(findSmallestNonRepresentable([1, 2, 4, 9])); // Output: 8
