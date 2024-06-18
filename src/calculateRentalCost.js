// Constants for rental cost and discounts
const BASE_RENTAL_COST = 40; // Base cost per day
const DISCOUNT_3_TO_6_DAYS = 20; // Discount for renting 3 or more days
const DISCOUNT_7_PLUS_DAYS = 50; // Additional discount for renting 7+ days

/**
 * Calculate rental cost based on the number of days.
 *
 * @param {number} days - Number of days the car is rented.
 * @return {number} Total rental cost.
 */
function calculateRentalCost(days) {
  let cost = days * BASE_RENTAL_COST; // Base cost calculation

  // Apply discounts based on the number of days
  if (days >= 7) {
    cost -= DISCOUNT_7_PLUS_DAYS; // Apply discount for 7 or more days
  } else if (days >= 3) {
    cost -= DISCOUNT_3_TO_6_DAYS; // Apply discount for 3 to 6 days
  }

  return cost;
}

module.exports = calculateRentalCost;
