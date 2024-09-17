/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rendCostDay = 40;
  const discountList = {
    bases: {
      day: 3,
      discount: 20,
    },
    long: {
      day: 7,
      discount: 50,
    },
  };
  const returnDiscount = (day) => {
    let baseDiscount = 0;

    for (const key of Object.keys(discountList)) {
      if (day < discountList[key].day) {
        return baseDiscount;
      } else {
        baseDiscount = discountList[key].discount;
      }
    }

    return baseDiscount;
  };

  return days * rendCostDay - returnDiscount(days);
}

module.exports = calculateRentalCost;
