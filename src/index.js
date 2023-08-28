// Create a class that holds a Date object as a property.
console.log('--------- Challenge 1 --------')

class D {
  constructor(...args) {
    this._date = new Date(...args);
  };
};

const no_param_date = new D();
const date_with_string = new D('July 1, 1999');
const date_with_params = new D(2001, 9, 11, 9, 30);
const date_with_date = new D(new Date());

console.log('no_param_date: ', no_param_date._date);
console.log('date_with_string: ', date_with_string._date);
console.log('date_with_params: ', date_with_params._date);
console.log('date_with_date: ', date_with_date._date);

// Provide human readable vaules for the Date object.
console.log('--------- Challenge 2 --------')

const challengeTwoDate = new D();
console.log('Get the year: ', challengeTwoDate); // #TODO: Fix these console logs
console.log('Get the yr: ', challengeTwoDate);