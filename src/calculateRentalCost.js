/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const daysForShortTermDiscount = 3;
  const daysForLongTermDiscount = 7;
  let price = days * basePrice;

  switch (true) {
    case days < daysForShortTermDiscount:
      return price;

    case days >= daysForShortTermDiscount && days < daysForLongTermDiscount:
      price -= shortTermDiscount;

      return price;

    case days >= daysForLongTermDiscount:
      price -= longTermDiscount;

      return price;
  }
}

module.exports = calculateRentalCost;
