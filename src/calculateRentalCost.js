/**
 * @param {number} days
 *
 * @return {number}
 */
const rentalCost = 40;
const longTerm = 7;
const shortTerm = 3;
const longVacationSale = 50;
const shortVacationSale = 20;

function calculateRentalCost(days) {
  if (days >= shortTerm && days < longTerm) {
    return rentalCost * days - shortVacationSale;
  } else if (days >= longTerm) {
    return rentalCost * days - longVacationSale;
  } else {
    return rentalCost * days;
  }
}

// write code here
module.exports = calculateRentalCost;
