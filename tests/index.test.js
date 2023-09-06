const { months, monthsAbbr, days, daysAbbr, D } = require('../src/index');

describe('Date Library Tests', () => {
  let myDate;

  beforeEach(() => {
    myDate = new D();
  });

  test('months array should have correct month names', () => {
    expect(months).toEqual([
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]);
  });



})
