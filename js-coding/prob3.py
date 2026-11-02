# Problem Statement #
# Given an array of positive numbers and a positive number ‘k,’
# find the maximum sum of any contiguous subarray of size ‘k’.
# Example 1:
# Input: [2, 1, 5, 1, 3, 2], k=3
# Output: 9
# Explanation: Subarray with maximum sum is [5, 1, 3].
# Example 2:
# Input: [2, 3, 4, 1, 5], k=2
# Output: 7
# Explanation: Subarray with maximum sum is [3, 4].

#####################################################
# TODO: try to solve the problem with JavaScript    #
#####################################################

arr = [2, 1, 5, 1, 3, 2]
k = 3

i = 0
j = k
maxSum = 0
while j <= len(arr):
    sum = 0
    subArr = arr[i:j]
    for num in subArr:
        sum += num
    if maxSum < sum:
        maxSum = sum
    j += 1
    i += 1


