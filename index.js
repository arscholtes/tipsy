const getTip = (bill, percentage, party = 1) => (
  (bill * (percentage / 100) / party)
);

const getTotal = (bill, percentage, party = 1) => (
  (bill + getTip(bill, percentage, party)) / party
);

module.exports = {getTip, getTotal};
