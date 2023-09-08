# ACS-3310-JS-DATE-LIBRARY
![npm](https://img.shields.io/npm/v/%40paul-fletes%2Facs-3310-js-date-library)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40paul-fletes%2Facs-3310-js-date-library)
![GitHub](https://img.shields.io/github/license/paul-fletes/ACS-3310-JS-Date-Library)
![GitHub issues](https://img.shields.io/github/issues/paul-fletes/ACS-3310-JS-Date-Library)


This is a simple date manipulation and formatting library for JavaScript. It provides an easy way to work with Date objects and format them according to your needs. You can use this library to retrieve various properties of a date, format dates in different ways, and determine the relative time difference between two dates.

## Installation

You can install the date library using npm or yarn:

```bash
npm install @paul-fletes/acs-3310-js-date-library
```

## Usage

To use the date library in your JavaScript code, follow these steps:

1. Import the library:

```javascript
const DateLibrary = require('@paul-fletes/acs-3310-js-date-library');
```

2. Create a DateLibrary object by passing a date or date-related arguments:

```javascript
const myDate = new D(); // Current date and time
const customDate = new D(2023, 0, 15); // January 15, 2023
```

3. Access date properties and methods:

```javascript
// Getters
console.log(myDate.year);     // Full year (e.g., 2023)
console.log(myDate.yr);       // Last two digits of the year (e.g., 23)
console.log(myDate.month);    // Full name of the month (e.g., "September")
console.log(myDate.mon);      // Abbreviated name of the month (e.g., "Sep")
console.log(myDate.day);      // Full name of the day of the week (e.g., "Wednesday")
console.log(myDate.dy);       // Abbreviated name of the day of the week (e.g., "Wed")
console.log(myDate.date);     // Day of the month (e.g., 8)
console.log(myDate.hours);    // Hours (0-23)
console.log(myDate.mins);     // Minutes (0-59)
console.log(myDate.secs);     // Seconds (0-59)

// Format the date using a custom mask (default is 'Y M D')
console.log(myDate.format('Y-M-D H:I:S')); // Example output: "2023-September-08 14:30:45"

// Get the full name of the day of the week
console.log(myDate.dayOfWeekFull()); // Example output: "Wednesday"

// Get the abbreviated name of the day of the week
console.log(myDate.dayOfWeekShort()); // Example output: "Wed"

// Get the date with an ordinal suffix (e.g., 1st, 2nd, 3rd, 4th)
console.log(myDate.getDateWithOrdinal()); // Example output: "8th"

// Determine the relative time difference between the current date and this date
console.log(myDate.when()); // Example output: "just now"
```

## Available Properties and Methods

### Getters

- `year`: Full year (e.g., 2023)
- `yr`: Last two digits of the year (e.g., 23)
- `month`: Full name of the month (e.g., "September")
- `mon`: Abbreviated name of the month (e.g., "Sep")
- `day`: Full name of the day of the week (e.g., "Wednesday")
- `dy`: Abbreviated name of the day of the week (e.g., "Wed")
- `date`: Day of the month (e.g., 8)
- `hours`: Hours (0-23)
- `mins`: Minutes (0-59)
- `secs`: Seconds (0-59)

### Methods

- `format(mask = 'Y M D')`: Format the date using a specified mask. You can customize the format using placeholders like 'Y' (full year), 'y' (last two digits of the year), 'M' (full name of the month), and more.

- `dayOfWeekFull()`: Get the full name of the day of the week.

- `dayOfWeekShort()`: Get the abbreviated name of the day of the week.

- `getDateWithOrdinal()`: Get the date with an ordinal suffix (e.g., 1st, 2nd, 3rd, 4th).

- `when()`: Determine the relative time difference between the current date and this date, returning a string indicating the relative time difference (e.g., "just now", "5 minutes ago", "in 2 days").

Feel free to use this date library to simplify date manipulation and formatting in your JavaScript projects.