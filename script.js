'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-3, -1));

// //creating a shallow copy of array
// const arrCopy2 = [...arr];
// const arrCopy = arr.slice();
// console.log(arrCopy);

// //SPLICE
// //console.log(arr.splice(2));
// console.log(arr);
// arr.splice(-1);
// console.log(arr);
// //we mostly use this to remove elements from an array.

// arr.splice(1, 2); //start from 1 then delete two elements
// console.log(arr);

// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //reverse() mutates the original array
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));

// //push(), unshift()
// //pop(), shift()
// //indexOf()
// //includes()

// //at() method
// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// //getting the last element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// //at method also works on strings
// console.log('Sri Lanka'.at(2));

// //looping arrays with forEach() method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   console.log(
//     `Movement: ${i + 1} Customer ${
//       movement > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(movement)}$`
//   );
// }
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${mov}`);
//   }
// });

// //forEach() with maps and sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.set('LKR', 'Rupees');
// console.log(currencies);

// //Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'LKR', 'EURO']);
// currenciesUnique.forEach(function (value, _, set) {
//   // _ "underscore" throw away variable
//   console.log(`${value}: ${value}`);
// });
// console.clear();

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
// const checkDogs  = function(dogsJulia, dogsKate){

//   const dogsJuliaCorrect = [...dogsJulia].slice(1,-2);
//   //console.log(dogsJuliaCorrect);
//   const dogs = [...dogsJuliaCorrect,...dogsKate];
//   dogs.forEach(function(dog,i){
//     const str=  dog>=3 ? `Dog number ${i+1} is an adult, and is ${dog} years old` :
//     `Dog number ${i+1} is still a puppy 🐶`;
//     console.log(str);
//   })

// }
// checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])

// const calcAverageHumanAge = function (dogs) {
//   let averageHumanAge = dogs
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return averageHumanAge;
// };
// console.log(calcAverageHumanAge([9, 16, 6, 8, 3, 10, 5, 6, 1, 4]));

// //Data transformations: MAP,FILTER, REDUCE
// const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUds = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * 1.1;
// });
// const movementsUSDArrow = movements.map(mov => mov * 1.1);

// console.log(movements2);
// console.log(movementsUSD);

// const arr4 = [];
// for (const mov of movements2) {
//   arr4.push(mov * eurToUds);
// }
// console.log(arr4);

// const movementsDescription = movements2.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${mov}`;
//   }
// });
// console.log(movementsDescription);

// //FILTER Method
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const deposits2 = [];
// for (const mov of movements) {
//   if (mov > 0) deposits2.push(mov);
// }
// console.log(deposits2);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// //practice question
// const users = [
//   { name: 'Alice', age: 25, isActive: true },
//   { name: 'Bob', age: 17, isActive: false },
// ];
// const validUsers = users.filter(function (user) {
//   return user.age >= 18 && user.isActive;
// });
// console.log(validUsers);

// //REDUCE Method
// const balance = movements.reduce(function (acc, mov, i, arr) {
//   return acc + mov;
// }, 0); //<-- Initial value
// console.log(balance);

// //////// Maximum value
// const max = movements.reduce(function (acc, mov) {
//   if (acc < mov) {
//     return mov;
//   } else {
//     return acc;
//   }
// }, movements[0]);
// console.log(max);

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = ''; //empty content inside containerMovements
  const mov = sort ? acc.movements.sort((a, b) => a - b) : acc.movements;
  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    //afterbegin, beforeend, beforebegin, afterend
  });
};
const calcDisplayBalance = function (currentAccount) {
  currentAccount.balance = currentAccount.movements.reduce(
    (acc, mov) => acc + mov,
    0
  );
  //currentAccount.balance = balance;
  labelBalance.textContent = currentAccount.balance + '$';
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');

    //acc.username = username;
  });
};
const updateUI = function (currentAccount) {
  displayMovements(currentAccount);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};
const calcDisplaySummary = function (acc) {
  const movements = acc.movements;
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const expenditures = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes;
  labelSumOut.textContent = Math.abs(expenditures);
  labelSumInterest.textContent = interest;
};
let currentAccount;

createUsernames(accounts);

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //e-event object, prevent form from submitting
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    //clear text boxes
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); //remove focus from a text field
    inputLoginUsername.blur(); //opposite of focus()

    //display UI and Welcome message
    labelWelcome.textContent = `Good Evening, ${
      currentAccount.owner.split(' ')[0]
    }!`;

    containerApp.style.opacity = 100;
    //display balance, summary and movements
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    console.log('Transfer valid');
  }

  console.log(receiverAcc);
  console.log(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    // add movement
    currentAccount.movements.push(amount);
    //
    updateUI(currentAccount);
  }

  console.log(loanApproved ? 'Loan Approved' : null);
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //Delete account
    accounts.splice(index, 1);
    //Hide UI
    containerApp, (style.opacity = 0);
  }
  inputCloseUsername = inputClosePin = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

///////////////NOTES/////////////////////
// //the find method
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis'); //returns the first occurance
// console.log(account);

//the findIndex() method

//some() and every() method
console.log(account1.movements);

//EQUALITY
console.log(account1.movements.includes(-130));

//CONDITION
//some method - returns true if at least one element satisfy the condition
console.log(account1.movements.some(mov => mov === -130));
const anyDeposites = account1.movements.some(mov => mov > 5000);
console.log(anyDeposites);

//every method - returns true only if every element satisfy the condition
console.log(account1.movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback - we can now reuse same callback function
const deposit = mov => mov > 0;
console.log(account1.movements.some(deposit));
console.log(account1.movements.every(deposit));
console.log(account1.movements.filter(deposit));

// forEach() - loop over an array
// map() - map each value into different value and return an array
// filter() - filter an array based on condition an return an array
// reduce() - reduce an array into a single value
// find() - find an element in the array that pass a condition
// findIndex() - find the index of the arry element that pass a condition
// some() - returns true if there is an element that pass the condition
// every() - returns true if every element pass the condition

//flat() and flatMap() methods
//flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// const [p1,p2,...others] = arr;
// const newArr = [...p1,...p2,...others];
// console.log(newArr);

console.log(arr.flat()); // flat() removes nested array structures but keep values (flattens array)

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); //this goes only one level deep
console.log(arrDeep.flat(2)); //argument gives number of levels that should be flatten

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const globalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(globalBalance);

//with method chaining
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => mov + acc, 0);
console.log(overallBalance);

//NOTE   flatmap() method
//flatMap() combines flat() and map()
const overallBalance2 = accounts
  .flatMap(acc => acc.movements) //flatMap here only go one level deep and we can not change it. If you need to go deeper still need to use flat method
  .reduce((acc, mov) => mov + acc, 0);
console.log(overallBalance2);

//Sorting arrays
//Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); //original array is also sorted

//Numbers
console.log(account1.movements.sort()); //Does not sort numbers properly
console.log(account1.movements); //because it does sorting based on strings

//We can fix this
//By passing in a compare callback function into the sort method

//return < 0  ---> [A,B] (keep order)
//return > 0   ---> [B,A] (Switch order)

//Ascending
account1.movements.sort((a, b) => {
  // a - current value, b - next value
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(account1.movements);

//Descending
account1.movements.sort((a, b) => {
  // a - current value, b - next value
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(account1.movements);
//the above method will also work with strings

//We can improve this code with math
//Ascending Order
account1.movements.sort((a, b) => a - b);
console.log(account1.movements);
//Descending Order
account1.movements.sort((a, b) => b - a);
console.log(account1.movements);
