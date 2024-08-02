/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  let basePrice = 0;

  for (let i = 0; i < days; i++) {
    basePrice += oneDayCost;
  }

  switch (true) {
    case days >= longTerm:
      basePrice -= longTermDiscount;
      break;

    case days >= shortTerm:
      basePrice -= shortTermDiscount;
      break;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
