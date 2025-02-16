/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPrice = 40;
  const discount = 20;
  const specialDiscount = 50;
  const sumForAllDays = days * rentalPrice;

  switch (true) {
    case days < 3: {
      return sumForAllDays;
    }

    case days < 7: {
      return sumForAllDays - discount;
    }

    default:
      return sumForAllDays - specialDiscount;
  }
}

module.exports = calculateRentalCost;
