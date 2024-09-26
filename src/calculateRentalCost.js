/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const totalAmount = pricePerDay * days;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return totalAmount - longTermDiscount;
  } else if (days >= shortTerm) {
    return totalAmount - shortTermDiscount;
  } else {
    return totalAmount;
  };
};

module.exports = calculateRentalCost;
