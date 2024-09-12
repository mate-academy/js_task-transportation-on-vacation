/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let moneyAmount = 0;
  const pricePerDay = 40;
  const dayOfDiscount3 = 20;
  const dayOfDiscount7 = 50;

  if (days <= 2) {
    moneyAmount = days * pricePerDay;

    return moneyAmount;
  } else if (days <= 6) {
    moneyAmount = (days * pricePerDay - dayOfDiscount3);

    return moneyAmount;
  } else if (days >= 7) {
    moneyAmount = (days * pricePerDay - dayOfDiscount7);

    return moneyAmount;
  }
}

module.exports = calculateRentalCost;
