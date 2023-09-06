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

  // when() method that takes a date and returns a human readable string of 'when' that date will occur.
  when() {
    const currentDate = new Date();
    const timeDifference = this._date - currentDate;
    const absTimeDifference = Math.abs(timeDifference);

    const oneMinute = 60 * 1000;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneMonth = oneDay * 30; // Approximate
    const oneYear = oneDay * 365; // Approximate

    if (timeDifference < 0) {
      if (absTimeDifference < oneMinute) {
        return "just now";
      } else if (absTimeDifference < oneHour) {
        const minutesAgo = Math.floor(absTimeDifference / oneMinute);
        return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
      } else if (absTimeDifference < oneDay) {
        const hoursAgo = Math.floor(absTimeDifference / oneHour);
        return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
      } else if (absTimeDifference < oneMonth) {
        const daysAgo = Math.floor(absTimeDifference / oneDay);
        return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
      } else if (absTimeDifference < oneYear) {
        const monthsAgo = Math.floor(absTimeDifference / oneMonth);
        return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
      } else {
        const yearsAgo = Math.floor(absTimeDifference / oneYear);
        return `${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`;
      }
    } else if (timeDifference > 0) {
      if (absTimeDifference < oneMinute) {
        return "just now";
      } else if (absTimeDifference < oneHour) {
        const minutesFromNow = Math.floor(absTimeDifference / oneMinute);
        return `in ${minutesFromNow} ${minutesFromNow === 1 ? 'minute' : 'minutes'}`;
      } else if (absTimeDifference < oneDay) {
        const hoursFromNow = Math.floor(absTimeDifference / oneHour);
        return `in ${hoursFromNow} ${hoursFromNow === 1 ? 'hour' : 'hours'}`;
      } else if (absTimeDifference < oneMonth) {
        const daysFromNow = Math.floor(absTimeDifference / oneDay);
        return `in ${daysFromNow} ${daysFromNow === 1 ? 'day' : 'days'}`;
      } else if (absTimeDifference < oneYear) {
        const monthsFromNow = Math.floor(absTimeDifference / oneMonth);
        return `in ${monthsFromNow} ${monthsFromNow === 1 ? 'month' : 'months'}`;
      } else {
        const yearsFromNow = Math.floor(absTimeDifference / oneYear);
        return `in ${yearsFromNow} ${yearsFromNow === 1 ? 'year' : 'years'}`;
      }
    } else {
      return "just now";
    }
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
console.log(d.format());
console.log(d.format('y/m/d'));
console.log(d.format('H:I:S'));
console.log(d.format('h:i:s'));
console.log(d.format('Y-M-D h:I:S'));

// Create a when() method that takes a date and returns a human readable string of 'when' that date will occur.
console.log('--------- Challenge 4 --------')
const d1 = new D(2019, 0, 2, 3, 4, 5);
console.log(d1.when());

const d2 = new D(2019, 9, 2, 3, 4, 5);
console.log(d2.when());

const d3 = new D(2024, 9, 2, 3, 4, 5);
console.log(d3.when());

const d4 = new D(2019, 6, 30, 3, 4, 5);
console.log(d4.when());

const d5 = new D();
console.log(d5.when());

module.exports = {
  months,
  monthsAbbr,
  days,
  daysAbbr,
  D
};