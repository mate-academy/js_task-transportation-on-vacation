/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  function calculateRentalCost(days) {
    const shortRentSale=20
    const longRentSale=50
    const daysPrice=40
  
    if(7<=days){
      return (days*daysPrice)-longRentSale
    }
    if(3<=days && days<7){
      return (days*daysPrice)-shortRentSale
    }
    if(days<3){
      return days*daysPrice
    }
  
  
  }
}

module.exports = calculateRentalCost;
