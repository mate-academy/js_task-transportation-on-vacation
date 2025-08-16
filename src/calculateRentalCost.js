/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  /**
   * Base rental cost per day
   */
  const rentalCostPerDay = 40;

  /**
   * Rental discount data
   */
  const discountPerDayLimit = [
    {
      name: '7 Day Discount',
      discount: 50,
      dayLimit: 7,
    },
    {
      name: '3 Day Discount',
      discount: 20,
      dayLimit: 3,
    },
  ];

  /**
   * Get discount amount of rental based on rental days count
   *
   * @param {number} checkDays
   * @return {number}
   */
  const getDiscountForDays = (checkDays) => {
    /**
     * sort desc by days count, could be removed
     * if discountPerDayLimit structure is sorted desc
     */
    discountPerDayLimit.sort((a, b) => b.dayLimit - a.dayLimit);

    for (const condition of discountPerDayLimit) {
      if (checkDays >= condition.dayLimit) {
        return condition.discount;
      }
    }

    // no checkDays doesn't meet any condition
    return 0;
  };

  if (typeof days !== 'number') {
    throw new TypeError('Expected a number');
  }

  return days * rentalCostPerDay - getDiscountForDays(days);
}

module.exports = calculateRentalCost;
