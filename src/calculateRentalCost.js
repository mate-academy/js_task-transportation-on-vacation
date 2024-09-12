/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const discountRangeFirst = 20;
  const discountRangeSecond = 50;

  switch (true) {
    case days < 3: 
      return days * costPerDay;
    case days < 7: 
      return days * costPerDay - discountRangeFirst;
    default: 
      return days * costPerDay - discountRangeSecond;
  }
}

module.exports = calculateRentalCost;
