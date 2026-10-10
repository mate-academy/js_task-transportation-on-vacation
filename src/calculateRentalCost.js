/**
 * @param {number} days
 *
 * @return {number}
 */

const rentalCondition = {
  dailyCost: 40,
  shortTerm: 3,
  longTerm: 7,
  shortTermDiscount: 20,
  longTermDiscount: 50,
};

function calculateRentalCost(days) {
  const totalPrice = rentalCondition.dailyCost * days;

  if (days >= rentalCondition.longTerm) {
    return totalPrice - rentalCondition.longTermDiscount;
  }

  if (days >= rentalCondition.shortTerm) {
    return totalPrice - rentalCondition.shortTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
