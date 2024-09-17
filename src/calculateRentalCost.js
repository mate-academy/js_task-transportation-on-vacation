/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const sumOneDay = 40;
  const discountShort = 20;
  const daysRangeShort = 3;
  const daysRangeLong = 7;
  const discountLong = 50;
  let resultSum = sumOneDay * days;

  if (days < daysRangeShort) {
    return resultSum;
  }

  if (days >= daysRangeShort && days < daysRangeLong) {
    resultSum -= discountShort;

    return resultSum;
  }

  if (days >= daysRangeLong) {
    resultSum -= discountLong;

    return resultSum;
  }
}

module.exports = calculateRentalCost;
