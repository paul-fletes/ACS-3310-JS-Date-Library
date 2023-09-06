// instantiate a list of months and days of the week long and abbreviated.
// this allows values to be used outside of direct getters.

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthsAbbr = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const daysAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Create a class that holds a Date object as a property.
console.log('--------- Challenge 1 --------')

class D {
  constructor(...args) {
    this._date = new Date(...args);
  };

  // Getters
  get year() {
    return this._date.getFullYear();
  };

  get yr() {
    return this._date.getFullYear() % 100;
  };

  get month() {
    return months[this._date.getMonth()];
  };

  get mon() {
    return monthsAbbr[this._date.getMonth()];
  };

  get day() {
    return days[this._date.getDay()];
  };

  get dy() {
    return daysAbbr[this._date.getDay()];
  };

  get date() {
    return this._date.getDate();
  };

  get hours() {
    return this._date.getHours();
  };

  get mins() {
    return this._date.getMinutes();
  };

  get secs() {
    return this._date.getSeconds();
  };

  // Formatting method that takes a "mask" string.
  format(mask = 'Y M D') {
    const formatOptions = {
      'Y': this.year,
      'y': this.year.toString().slice(-2),
      'M': this.month,
      'm': this.mon,
      'D': this.date.toString().padStart(2, '0'),
      'd': this.date,
      '#': this.getDateWithOrdinal(),
      'H': this.hours.toString().padStart(2, '0'),
      'h': this.hours,
      'I': this.mins.toString().padStart(2, '0'),
      'i': this.mins,
      'S': this.secs.toString().padStart(2, '0'),
      's': this.secs,
    };

    const formattedDate = mask.replace(/./g, (char) => {
      return formatOptions[char] !== undefined ? formatOptions[char] : char;
    });

    return formattedDate;
  };

  getDateWithOrdinal() {
    const date = this.date;
    const suffixes = ['st', 'nd', 'rd', 'th'];
    const relevantDigits = (date < 30) ? date % 20 : date % 30;
    const suffix = (relevantDigits <= 3) ? suffixes[relevantDigits - 1] : suffixes[3];
    return `${date}${suffix}`;
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
console.log('Get the year: ', challengeTwoDate.year);
console.log('Get the yr: ', challengeTwoDate.yr);
console.log('Get the month: ', challengeTwoDate.month);
console.log('Get the mon: ', challengeTwoDate.mon);
console.log('Get the day: ', challengeTwoDate.day);
console.log('Get the dy: ', challengeTwoDate.dy);
console.log('Get the date: ', challengeTwoDate.date);
console.log('Get the hour: ', challengeTwoDate.hours);
console.log('Get the minute: ', challengeTwoDate.mins);
console.log('Get the second: ', challengeTwoDate.secs);

// Create a format method that takes a "mask" string. 
// The mask will contain formatting characters which displays various date elements
console.log('--------- Challenge 3 --------')

const d = new D(2017, 0, 2, 3, 4, 5);
console.log(d.format());          // Output: 2017 January 02
console.log(d.format('y/m/d'));   // Output: 17/Jan/2
console.log(d.format('H:I:S'));   // Output: 03:04:05
console.log(d.format('h:i:s'));   // Output: 3:4:5
console.log(d.format('Y-M-D h:I:S')); // Output: 2017-January-02 3:04:05



module.exports = {
  months,
  monthsAbbr,
  days,
  daysAbbr,
  D
};