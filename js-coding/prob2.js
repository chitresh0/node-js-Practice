// Trapping Rain Water problem using a two-pointer approach 

function trapRainWater(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

// Example usage
const walls = [0, 3, 0, 0, 1, 0, 4, 1, 0, 2];
console.log(walls)
console.log(trapRainWater(walls)); // Output: 10
