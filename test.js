function nth_most_rare(arr, n) {
    let freqMap = {};
    arr.forEach((num) => freqMap[num] = (freqMap[num] || 0) + 1);
    let sortedArr = Object.entries(freqMap).sort((a, b) => a[1] - b[1]);
    return sortedArr[n-1] ? sortedArr[n-1][0] : null;
}
