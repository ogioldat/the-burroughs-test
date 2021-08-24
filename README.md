# the-burroughs-test

## Description

Create a small API to help a small ﬁctional company calculate the dates on which they should pay their sales staff. Company payroll is handled like so:

-   Sales staff are paid a regular ﬁxed base salary each month, plus a regular monthly bonus.

-   Base salaries are paid on the last day of each month unless that day is a Saturday or Sunday (a weekend), in which case they are paid on the Friday before the weekend

-   On the 15th of each month, bonuses are paid for the previous month, unless that day is a weekend, in which case they are paid on the ﬁrst Wednesday after the 15th.

Your API should accept a date as a parameter, and return the payment dates for the following 12 months, including the supplied date. Results should be returned in CSV format.

## Start up

### Requirements

```
node >=14.17.5
yarn installed
```

### Install all dependencies

```
yarn
```

### Launch the app

```
yarn start // production mode

yarn start:dev // development mode

yarn test // run tests
```
