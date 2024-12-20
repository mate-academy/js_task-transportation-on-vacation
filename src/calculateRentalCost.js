/**
 * @param {number} days
 *
 * @return {number}
 */
const longTerm = 7;
const shortTerm = 3;
const costPerRentalDay = 40;
const longTermDiscount = 50;
const shortTermDiscount = 20;

function calculateRentalCost(days) {
  let rentalCost = 0;

  if (days < shortTerm) {
    rentalCost = days * costPerRentalDay;
  }

  if (days >= shortTerm && days < longTerm) {
    rentalCost = days * costPerRentalDay - shortTermDiscount;
  }

  if (days >= longTerm) {
    rentalCost = days * costPerRentalDay - longTermDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
