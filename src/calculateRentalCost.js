/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;

  switch (true) {
    case days < 3:
      return rentPerDay * days;

    case days >= 3 && days < 7:
      return rentPerDay * days - threeDaysDiscount;

    default:
      return rentPerDay * days - sevenDaysDiscount;
  }
}

module.exports = calculateRentalCost;
