/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40 * days;
  const shortTerm = 3;
  const longTerm = 7;
  let TermDiscount = 0;

  if (days >= shortTerm) {
    TermDiscount = 20;
  }

  if (days >= longTerm) {
    TermDiscount = 50;
  }

  return (rentalCost - TermDiscount);
}

module.exports = calculateRentalCost;
