// let prices = [7, 1, 5, 3, 6, 4];
// let prices = [7, 6, 4, 3, 1];
let prices = [1, 2, 3, 4, 5];
// Output: 5;

var maxProfit = function (prices) {
  let totalProfit = 0;

  if (prices.length % 2 === 0) {
    let middleIndex = Math.floor(prices.length / 2);
    let left = prices.slice(0, middleIndex);
    let right = prices.slice(middleIndex);

    let leftMaxProfit = 0;
    let rightMaxProfit = 0;

    let leftMinValue = left[0];
    let rightMinValue = right[0];

    for (let i = 0; i < left.length; i++) {
      if (left[i] < leftMinValue) {
        leftMinValue = left[i];
      } else {
        leftMaxProfit = Math.max(leftMaxProfit, left[i] - leftMinValue);
      }
    }
    for (let i = 0; i < right.length; i++) {
      if (right[i] < rightMinValue) {
        rightMinValue = right[i];
      } else {
        rightMaxProfit = Math.max(rightMaxProfit, right[i] - rightMinValue);
      }
    }
    totalProfit = leftMaxProfit + rightMaxProfit;
  } else {
    let minValue = prices[0];
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minValue) {
        minValue = prices[i];
      } else {
        // JS inbuilt method
        totalProfit = Math.max(totalProfit, prices[i] - minValue);

        // JS traditional method
        // result = prices[i] - minValue;
        // if (result > totalProfit) {
        // totalProfit = result;
        // }
      }
    }
  }
  return totalProfit;
};

console.log(maxProfit(prices));
