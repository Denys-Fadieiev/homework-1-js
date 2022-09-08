// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие (Пусть совершеннолетним считается пользователь, которому исполнилось 18 лет):
// isAdult(20); // true
// isAdult(4); // false

let age;
const isAdult = function(age){
  if(age >= 18){
    return true;
  } else {
    return false;
  }
};
isAdult(20);

// Или

const isAdult2 = function(age){
  return (age >= 18) ? true : false;
}
isAdult2(20);

const isAdult3 = function(age) {
  if(typeof age === 'number'){
    return (age >= 18) ? true : false;
  } else {
    return null;
  }
}
isAdult3(20)

// + проверки типов данных 

const isAdult4 = function(age) {
  if(typeof age !== 'number' || isNaN(age)){
    return null;
  } else{
    return (age >= 18) ? true : false;
  }
}
console.log(isAdult4('hgjhgjhjgh'))
console.log(isAdult4(5))


// 2.  Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

const checkMultiplicity = function(num1, num2) {
  if((num1 % num2 == 0)) {
    return true;
  } else {
    return false;
  }
}
checkMultiplicity(20, 5)

// Или

const checkMultiplicity2 = function(num1, num2) {
  return (num1 % num2 == 0) ? true : false;
}
checkMultiplicity2(20, 5)

// + проверки типов данных 

const checkMultiplicity3 = function(num1, num2) {
  if(typeof num1 === 'number' && typeof num2 === 'number' && !isNaN(num1 - num2)){
    return (num1 % num2 == 0) ? true : false;
  } else {
    return null;
  }
}
checkMultiplicity3(20, 5)


// 3. Проверка возможности треугольника. Создать функцию которая принимает длины сторон треугольника; функция возвращает true если треугольник возможен и false если нет

const triangle = function(a, b, c){
  if((a < b + c) && (b < a + c) && (c < a + b)) {
    return true;
  } else {
    return false;
  }
}
console.log(triangle(25, 45, 65))

// Или

const triangle2 = function(a, b, c){
  return ((a < b + c) && (b < a + c) && (c < a + b)) ? true : false;
}
console.log(triangle2(25, 45, 65))

// + проверки типов данных 

const triangle3 = function(a, b, c) {
  if((a <= 0 || b <= 0 || c <= 0) ||
  (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') ||
  isNaN(a - b - c)){
    return NaN;
  } else{
    return ((a < b + c) || (b < a + c) || (c < a + b)) ? true : false;
  }
}
  console.log(triangle3(44, 87, 7))


// 4. написть функцию, которая принимает число и возвращает сумму нечетных чисел от 1 до указанного числа

//!Я не могу понять почему у меня в конце undefined выбивает

let i = 0;

const sumOdd = function(num) {
  while(i < num) {
    if(i % 2 !== 0){
      console.log(i);
    }
    i++;
    if (i > num){
      break;
    }
  }
}
console.log(sumOdd (10))

// или

const sumOdd2 = function(num) {
  while(i < num) {
    i++;
    if(i % 2 === 0){
      continue;
    }
    console.log(i);
  }
}
console.log(sumOdd2 (10))

//ниже вариант с меньшим количеством циклов

i = 1;

const sumOdd3 = function(num) {
  while(i <= num && i % 2 !== 0) {
    console.log(i);
    i+=2;
    if (i >= num) {
      break;
    }
  }
}
console.log(sumOdd3 (11))


// 5. Создать функцию, которая будет проверять, является ли число простым. Простым является неотрицательное число, которое делится нацело только на самого себя или на 1.

i = 0;

// const checkPrimeNum = function(primeNum) {
//   while(primeNum > i){
//     if(primeNum % i !== 0){
//       i++;
//       return primeNum;
//     } else {
//       return null;
//     }
//   }
// }

const checkPrimeNum = function(primeNum) {
  while(primeNum > i){
    i++;
    if (primeNum % 1 === 0 && primeNum % i++ === 0){
      continue;
    }
  return primeNum;
  }
}
console.log(checkPrimeNum)

